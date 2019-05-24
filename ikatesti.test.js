const ika = require('./ikatesti');

test('tasan 18v',() => {
    expect(ika(18)).toBe(true);
});

test('selvästi yli 18v',() => {
    expect(ika(24)).toBe(true);
});

test('selvästi alle 18v',() => {
    expect(ika(17)).toBe(false);
});

test('syötteet numeromaisia merkkijonoja', ()=> {
    expect(ika("2")).toBe(false);
});

test('syötteet numeromaisia merkkijonoja, minna + jaakko heittää poikkeuksen', ()=> {
    expect(() => {ika("minna")}).toThrow('ei lukuja');
});


// test('syötteet ei numeromaisia, heittää virheen.',() =>{
//     expect(ika)
// })