var expect = require('expect');

console.log('Starting tests!');

var test = {
    NUM: 9,
    NULL: null,
    UNDEF: undefined,
    ZEROLEN: '',
    ONELEN: 'a',
    normalString: 'bomb',
    numberInitial: '9credit'
};

function cap(val) {
    if (val && typeof val === 'string' && val.length > 0) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
    return null;
}

expect(cap(test.NUM)).toBe(null, '9 not null');
expect(cap(test.NULL)).toBe(null, 'null not null');

expect(cap(test.UNDEF)).toBe(null, 'undefined not null');
expect(cap(test.ZEROLEN)).toBe(null, '\'\' not null');
expect(cap(test.normalString)).toBe('Bomb', 'bomb not Bomb');
expect(cap(test.numberInitial)).toBe('9credit', '9credit not 9credit');

var toExist = 'Vno: vno.io';
expect(toExist).toExist(`${toExist} toExist fails`);
expect(undefined).toExist(`null toExist fails`);

console.log('All tests passed!');
