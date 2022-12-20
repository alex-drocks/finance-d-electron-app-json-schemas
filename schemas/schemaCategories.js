// schemas/schemaCategories.js
const validators = require('./validators');

module.exports = {
    type: 'array',
    minItems: 1,
    'items': {
        'anyOf': [
            {
                type: 'object',
                required: [
                    'id',
                    'name',
                    'percentAllowed'
                ],
                properties: {
                    'id': {
                        type: 'string',
                        pattern: validators.uuidv4RegExString
                    },
                    'name': {
                        type: 'string',
                        minLength: 2,
                        maxLength: 48
                    },
                    'percentAllowed': {
                        type: 'number',
                        minimum: 0,
                        maximum: 100
                    }
                },
                additionalProperties: false
            }
        ]
    }
};