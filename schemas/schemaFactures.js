// schemas/schemaFactures.js
const validators = require('./validators');

module.exports = {
    type: 'object',
    required: [],
    patternProperties: {
        [validators.uuidv4RegExString]: {
            type: 'object',
            required: [
                'id',
                'transactionMode',
                'nom',
                'numero',
                'date',
                'transactions',
                'paiements',
                'totaux',
                'solde'
            ],
            properties: {
                'id': {
                    type: 'string',
                    'pattern': validators.uuidv4RegExString
                },
                'transactionMode': {
                    type: 'string',
                    enum: ['revenus', 'depenses']
                },
                'nom': {
                    type: 'string',
                    minLength: 2,
                    maxLength: 70
                },
                'numero': {
                    type: 'string',
                    minLength: 1,
                    maxLength: 70
                },
                'date': {
                    type: 'object',
                    required: [
                        'str',
                        'num',
                        'modif'
                    ],
                    properties: {
                        'str': {
                            type: 'string',
                            pattern: validators.dateLocale
                        },
                        'num': {
                            type: 'string',
                            pattern: validators.dateNumeric
                        },
                        'modif': {
                            type: 'integer',
                            maximum: validators.dateUnixMillisecondsMax
                        }
                    },
                    additionalProperties: false
                },
                'transactions': {
                    type: 'array',
                    minItems: 1,
                    'items': {
                        'anyOf': [
                            {
                                type: 'object',
                                required: [
                                    'montant',
                                    'taxe',
                                    'quantite',
                                    'sousTotal',
                                    'tps',
                                    'tvq',
                                    'total',
                                    'categorie',
                                    'description'
                                ],
                                properties: {
                                    'montant': {
                                        type: 'string',
                                        pattern: validators.montant
                                    },
                                    'taxe': {
                                        type: 'string',
                                        enum: validators.codesTaxesEnum
                                    },
                                    'quantite': {
                                        type: 'string',
                                        pattern: validators.quantite
                                    },
                                    'sousTotal': {
                                        type: 'string',
                                        pattern: validators.montant
                                    },
                                    'tps': {
                                        type: 'string',
                                        pattern: validators.montant
                                    },
                                    'tvq': {
                                        type: 'string',
                                        pattern: validators.montant
                                    },
                                    'total': {
                                        type: 'string',
                                        pattern: validators.montant
                                    },
                                    'categorie': {
                                        type: 'string',
                                        maxLength: 48
                                    },
                                    'description': {
                                        type: 'string',
                                        maxLength: 400
                                    }
                                },
                                additionalProperties: false
                            }
                        ]
                    }
                },
                'paiements': {
                    type: 'array',
                    minItems: 1,
                    'items': {
                        'anyOf': [
                            {
                                type: 'array',
                                minItems: 4,
                                maxItems: 4,
                                'items': [
                                    {
                                        type: 'string',
                                        maxLength: 50
                                    },
                                    {
                                        type: 'string',
                                        pattern: validators.dateLocale
                                    },
                                    {
                                        type: 'string',
                                        maxLength: 50
                                    },
                                    {
                                        type: ['number', 'string'],
                                        minimum: -99999999999999999999,
                                        maximum: 99999999999999999999
                                    }
                                ]
                            }
                        ]
                    }
                },
                'totaux': {
                    type: 'array',
                    minItems: 4,
                    maxItems: 4,
                    'items': {
                        'anyOf': [
                            {
                                type: 'number',
                                minimum: -99999999999999999999,
                                maximum: 99999999999999999999
                            },
                            {
                                type: 'number',
                                minimum: -99999999999999999999,
                                maximum: 99999999999999999999
                            },
                            {
                                type: 'number',
                                minimum: -99999999999999999999,
                                maximum: 99999999999999999999
                            },
                            {
                                type: 'number',
                                minimum: -99999999999999999999,
                                maximum: 99999999999999999999
                            }
                        ]
                    }
                },
                'solde': {
                    type: 'number',
                    minimum: -99999999999999999999,
                    maximum: 99999999999999999999
                }
            },
            additionalProperties: false
        }
    }
};