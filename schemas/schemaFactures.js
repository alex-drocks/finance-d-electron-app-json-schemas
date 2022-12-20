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
                                        maxLength: 2000
                                    }
                                },
                                additionalProperties: false
                            }
                        ]
                    }
                },
                'paiements': {
                    type: 'array',
                    minItems: 0,
                    'items': {
                        'anyOf': [
                            {
                                type: 'array',
                                minItems: 4,
                                maxItems: 4,
                                'items': [
                                    {
                                        type: 'string',
                                        maxLength: 70
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
                                        minimum: validators.numberMin,
                                        maximum: validators.numberMax
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
                                minimum: validators.numberMin,
                                maximum: validators.numberMax
                            },
                            {
                                type: 'number',
                                minimum: validators.numberMin,
                                maximum: validators.numberMax
                            },
                            {
                                type: 'number',
                                minimum: validators.numberMin,
                                maximum: validators.numberMax
                            },
                            {
                                type: 'number',
                                minimum: validators.numberMin,
                                maximum: validators.numberMax
                            }
                        ]
                    }
                },
                'solde': {
                    type: 'number',
                    minimum: validators.numberMin,
                    maximum: validators.numberMax
                },
                'commentaire': {
                    type: 'string',
                    maximum: 330
                }
            },
            additionalProperties: false
        }
    }
};