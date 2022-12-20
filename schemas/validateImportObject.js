module.exports = function validateImportObject(sourceObject) {
    const Ajv = require('ajv').default;
    let ajv = new Ajv({allowUnionTypes: true});

    const schema = require('./schemaImportJSON');
    const validate = ajv.compile(schema);
    ajv = null; // get rid of useless object we are done with it

    if (!validate(sourceObject)) {
        return validate.errors;
    }

    return true;
};