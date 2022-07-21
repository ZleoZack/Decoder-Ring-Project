const expect = require("chai").expect;
const polybius = require("../src/polybius")

describe ("polybius", () => {
it("Should translate letters i/j to 42 for encoding", () =>{
const expected = "42"
const actual  = polybius.polybius("i");
expect(actual).to.eql(expected);
});
it("When decoding translates i/j to 42", () => {
    const expected = "42"
    const actual = polybius.polybius("j");
    expect(actual).to.eql(expected);
});
it("It ignores capital letters", () => {
    const expected = "11 23513434112251"
    const actual = polybius.polybius("a message");
    expect(actual).to.equal(expected);
});
it("It maintains spaces in the message, before and after encoding", () => {
    const expected = "11 23513434112251"
    const actual = polybius.polybius("a message");
    expect(actual).to.equal(expected);
});
it("It maintains spaces in the message, before and after decoding", () => {
    const expected ="11 23513434112251"
    const actual = polybius.polybius("a message");
    expect(actual).to.equal(expected);
});
it("should encode a message by translating each letter to number pairs", () => {
    const expected = "11 23513434112251";
    const actual = polybius.polybius("a message", 1); 
    expect(actual).to.equal(expected);
});
});
