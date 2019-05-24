const jako = require('./osamaara');

test('jakaa ekan numeron tokalla', () => {
    expect(jako(10, 5)).toBe(2);
});

test('syötteet numeromaisia merkkijonoja', ()=> {
    expect(jako("1", "1")).toBe(1);
});

test('sanoja, heittää poikkeuksen', ()=> {
    expect(() => {jako("minna", "jaakko")}).toThrow('ei lukuja');
});