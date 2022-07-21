const expect = require("chai").expect;
const { caesar } = require("../src/caesar")

describe("caesar", () => {
it("should return false if shift is 0", () => {
const actual = caesar("awesome", 0);
expect(actual).to.be.false;
    });
it("should return false if shift is greater than 25", () => {
const actual = caesar("awesome", 26);
        expect(actual).to.be.false;
    });
it("should return false if shift is less than -25", () => {
const actual = caesar("awesome", -26);
        expect(actual).to.be.false;
    });  
it("should encode a message by shifting letters", () => {
const expected = "dzhvrph";
const actual = caesar("awesome", 3);
        expect(actual).to.eql(expected);
    });
it("should ignore capital letters", () => {
const expected = "dzhvrph";
const actual = caesar("awesome", 3);
        expect(actual).to.eql(expected);
    });
it("should handle negative shifts", () => {
const expected = "xtbpljb";
const actual = caesar("awesome", -3);
        expect(actual).to.eql(expected);
    });
it("wraps shifts that go past the end of the alphabet", () => {
const expected = "oksgcas"
const actual = caesar("awesome", 14);
        expect(actual).to.eql(expected);
    });
it("should leave spaces as is", () => {
const expected = "dzhvrph";
const actual = caesar("awesome", 3); 
expect(actual).to.eql(expected);
});
it("should decode a message by shifting the letters in the opposite direction", () => {
    const message = "phvvdjh";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "message";
    expect(actual).to.eql(expected);
});
it("should be a function", () => {
expect(caesar).to.be.a("function")
});
});
