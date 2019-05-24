const bussilippu = require('./bussilippu');

test('ikä on alle 7', () => {
    expect(bussilippu(6)).toBe(0);
});

test('ikä on 14', () => {
    expect(bussilippu(14)).toBe(1);
});

test('ikä on 20', () => {
    expect(bussilippu(20)).toBe(1.5);
});

test('ikä on 30', () => {
    expect(bussilippu(30)).toBe(3);
});

test('ikä on 80', () => {
    expect(bussilippu(80)).toBe(1.5);
});

test('ikä on null', () => {
    expect(() => {bussilippu()}).toThrow('ei parametreja annettu');
});
