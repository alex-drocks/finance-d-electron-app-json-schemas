// schemas/schemaClientsFournisseurs.js
const validators = require('./validators');

module.exports = {
    type: 'object',
    required: [],
    additionalProperties: {
        type: 'object',
        required: [
            'nom'
        ],
        properties: {
            'nom': {
                type: 'string',
                minLength: 2,
                maxLength: 70
            },
            'entreprise': {
                type: 'string',
                maxLength: 70
            },
            'roleDescription': {
                type: 'string',
                maxLength: 100
            },
            'site': {
                type: 'string',
                maxLength: validators.urlMaxLength
            },
            'email': {
                type: 'string',
                maxLength: validators.emailAddressMaxLength
            },
            'cellulaire': {
                type: 'string',
                maxLength: 45
            },
            'telephone': {
                type: 'string',
                maxLength: 45
            },
            'rue': {
                type: 'string',
                maxLength: 70
            },
            'ville': {
                type: 'string',
                maxLength: 70
            },
            'province': {
                type: 'string',
                maxLength: 70
            },
            'pays': {
                type: 'string',
                maxLength: 70
            },
            'codePostal': {
                type: 'string',
                maxLength: 7
            },
            'taxe': {
                type: 'string',
                maxLength: 70
            },
            'categorie': {
                type: 'string',
                maxLength: 48
            },
            'notes': {
                type: 'string',
                maxLength: 520
            },
            'lastTimeUsed': {
                type: 'integer',
                maximum: validators.dateUnixMillisecondsMax
            },
            'methodePaiement': {
                type: 'string',
                maxLength: 100
            },
            'conditionPaiement': {
                type: 'string',
                maxLength: 100
            },
            'noteAdditionnelle': {
                type: 'string',
                maxLength: 200
            },
        },
        additionalProperties: false
    }
};
