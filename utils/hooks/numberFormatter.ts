const POINTS_LOOKUP = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
];

export const numberFormatter = (
    num: number,
    options = { decimal: true, type: '' },
) => {
    if (options.decimal == undefined) {
        options.decimal = true;
    }

    let item = POINTS_LOOKUP.slice()
        .reverse()
        .find(function (item) {
            return num >= item.value;
        });

    if (item) {
        let formatNum;
        if (num > 99999 && num < 999999 && options.type == 'add_more_users') {
            num = num * 0.000001;
            formatNum = String(num).split('.');
            item.symbol = 'M';
            options.decimal = true;
        } else {
            formatNum = String(num / item.value).split('.');
        }
        if (options.decimal) {
            return formatNum.length == 1
                ? formatNum[0] + item.symbol
                : formatNum[0] + '.' + formatNum[1].slice(0, 1) + item.symbol;
        } else {
            return formatNum.length == 1
                ? formatNum[0]
                : formatNum[0] + item.symbol;
        }
    } else {
        return '0';
    }
};
