// schemas/schemaImportJSON.js

// All schemas must use JSON Schema version: draft-07
const schemaClientsFournisseurs = require('./schemaClientsFournisseurs');
const schemaFactures = require('./schemaFactures');
const schemaCategories = require('./schemaCategories');
const validators = require('./validators');

module.exports = {
    type: 'object',
    required: [
        '_originInfo',
        'data'
    ],
    properties: {
        '_originInfo': {
            '$id': '#/properties/_originInfo',
            type: 'object',
            required: [
                'appVersion',
                'computer',
                'folderID',
                'folderName',
                'folderEmail',
                'createdAtTimestamp'
            ],
            properties: {
                'appVersion': {
                    '$id': '#/properties/_originInfo/properties/appVersion',
                    type: 'string',
                    'pattern': validators.appVersionRegExString
                },
                'computer': {
                    '$id': '#/properties/_originInfo/properties/computer',
                    type: 'string',
                    minLength: 1
                },
                'folderID': {
                    '$id': '#/properties/_originInfo/properties/folderID',
                    type: 'string',
                    'pattern': validators.uuidv4RegExString
                },
                'folderName': {
                    '$id': '#/properties/_originInfo/properties/folderName',
                    type: 'string',
                    'minLength': 2
                },
                'folderEmail': {
                    '$id': '#/properties/_originInfo/properties/folderEmail',
                    type: 'string'
                },
                'createdAtTimestamp': {
                    '$id': '#/properties/_originInfo/properties/createdAtTimestamp',
                    type: 'integer',
                    maximum: validators.dateUnixMillisecondsMax
                }
            },
            additionalProperties: false
        },
        'data': {
            '$id': '#/properties/data',
            type: 'object',
            required: [],
            minProperties: 1,
            properties: {
                'clients': schemaClientsFournisseurs,
                'fournisseurs': schemaClientsFournisseurs,
                'facturesRevenus': schemaFactures,
                'facturesDepenses': schemaFactures,
                'categoriesRevenus': schemaCategories,
                'categoriesDepenses': schemaCategories
            },
            additionalProperties: false
        }
    },
    additionalProperties: false
};
