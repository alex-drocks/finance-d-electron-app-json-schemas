// schemas/validators.js

const getCodesTaxes = require('../staticData/codeTaxes');

module.exports = {
    uuidv4RegExString: '^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$',
    appVersionRegExString: '^[0-9]+\\.[0-9]+\\.[0-9]+$',
    dateLocale: '^[0-9]{1,2} [a-zA-Zéû]+ [0-9]{4}$|^today$',
    dateNumeric: '^[0-9]{8}$',
    dateUnixMillisecondsMax: 9999999999999,
    urlMaxLength: 2048,
    emailAddressMaxLength: 320,
    montant: '^-?[0-9]{0,3}\\s?[0-9]{0,3}\\s?[0-9]{0,3}\\s?[0-9]{0,3}\\.?[0-9]{0,20}$',
    quantite: '^-?[0-9]{0,4}\\.?[0-9]{0,2}$',
    codesTaxesEnum: getCodesTaxes()
};