'use strict';

const codeTaxes = [
    {
        displayText: 'Aucune taxe',
        injectValue: '',
        tps: 0,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'QC (Québec: TPS 5% + TVQ 9.975%)',
        injectValue: 'QC',
        tps: 0.05,
        tvq: 0.09975,
        isTaxeIn: false
    },
    {
        displayText: 'QC-i (Québec: TPS 5% + TVQ 9.975% incluses)',
        injectValue: 'QC-i',
        tps: 0.05,
        tvq: 0.09975,
        isTaxeIn: true
    },
    {
        displayText: 'TPS (seulement la TPS 5%)',
        injectValue: 'TPS',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'TVQ (seulement la TVQ 9.975%)',
        injectValue: 'TVQ',
        tps: 0,
        tvq: 0.09975,
        isTaxeIn: false
    },
    {
        displayText: 'TPS-i (seulement la TPS 5% incluse)',
        injectValue: 'TPS-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },
    {
        displayText: 'TVQ-i (seulement la TVQ 9.975% incluse)',
        injectValue: 'TVQ-i',
        tps: 0,
        tvq: 0.09975,
        isTaxeIn: true
    },

    {
        displayText: 'AB (Alberta: TPS 5%)',
        injectValue: 'AB',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'AB-i (Alberta: TPS 5% incluse)',
        injectValue: 'AB-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'BC (C.-Britannique: TPS 5%)',
        injectValue: 'BC',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'BC-i (C.-Britannique: TPS 5% incluse)',
        injectValue: 'BC-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'PE (Î.-P.-Édouard: TVH 15%)',
        injectValue: 'PE',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'PE-i (Î.-P.-Édouard: TVH 15% incluse)',
        injectValue: 'PE-i',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'MB (Manitoba: TPS 5%)',
        injectValue: 'MB',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'MB-i (Manitoba: TPS 5% incluse)',
        injectValue: 'MB-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'NB (N.-Brunswick: TVH 15%)',
        injectValue: 'NB',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'NB-i (N.-Brunswick: TVH 15% incluse)',
        injectValue: 'NB-i',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'NS (N.-Écosse: TVH 15%)',
        injectValue: 'NS',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'NS-i (N.-Écosse: TVH 15% incluse)',
        injectValue: 'NS-i',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'NU (Nunavut: TPS 5%)',
        injectValue: 'NU',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'NU-i (Nunavut: TPS 5% incluse)',
        injectValue: 'NU-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'ON (Ontario: TVH 13%)',
        injectValue: 'ON',
        tps: 0.13,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'ON-i (Ontario: TVH 13% incluse)',
        injectValue: 'ON-i',
        tps: 0.13,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'SK (Saskatchewan: TPS 5%)',
        injectValue: 'SK',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'SK-i (Saskatchewan: TPS 5% incluse)',
        injectValue: 'SK-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'NL (T.-N.-Labrador: TVH 15%)',
        injectValue: 'NL',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'NL-i (T.-N.-Labrador: TVH 15% incluse)',
        injectValue: 'NL-i',
        tps: 0.15,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'YT (Yukon: TPS 5%)',
        injectValue: 'YT',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'YT-i (Yukon: TPS 5% incluse)',
        injectValue: 'YT-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'NT (T. N.-Ouest: TPS 5%)',
        injectValue: 'NT',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: false
    },
    {
        displayText: 'NT-i (T. N.-Ouest: TPS 5% incluse)',
        injectValue: 'NT-i',
        tps: 0.05,
        tvq: 0,
        isTaxeIn: true
    },

    {
        displayText: 'TVH (saisie manuelle)',
        injectValue: 'TVH',
        tps: 0,
        tvq: 0,
        isTaxeIn: false
    }
];

function getCodesTaxes() {
    return codeTaxes.map(tax => tax.injectValue);
}

module.exports = getCodesTaxes;
