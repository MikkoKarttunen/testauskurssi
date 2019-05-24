const ala = require('./pinta-ala');

test('kertoo numerot ja jakaa tulon kahdella', () => {
    expect(ala(5, 5)).toBe(12.5);
});

test('syötteet numeromaisia merkkijonoja', ()=> {
    expect(ala("3", "3")).toBe(4.5);
});

test('vastaukseen tulee desimaaleja niim birusti', ()=> {
    expect(ala("3", "3")).toBe(4.5);
});


test('sanoja, heittää poikkeuksen', ()=> {
    expect(() => {ala("minna", "jaakko")}).toThrow('ei lukuja');
});

test('negatiivinen luku, heittää poikkeuksen', ()=> {
    expect(() => {ala(-1, 2)}).toThrow('negatiivinen luku');
});
