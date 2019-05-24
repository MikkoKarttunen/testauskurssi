const sum = require('./sum');

test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('syötteet numeromaisia merkkijonoja, minna + jaakko heittää poikkeuksen', ()=> {
    expect(sum("1", "2")).toBe(3);
});

test('syötteet numeromaisia merkkijonoja, minna + jaakko heittää poikkeuksen', ()=> {
    expect(() => {sum("minna", "jaakko")}).toThrow('ei lukuja');
});

test('vain yksi parametri annettu, palautetaan itse luku', ()=> {
    expect(sum(4)).toBe(4);
});

test('ei parametreja annettu', ()=> {
    expect(sum(4)).toBe(4);
});

