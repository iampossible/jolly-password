'use strict';

const assert = require('assert');


describe("test runner", () => {
    it("should run tests", () => {
        assert.ok(true);
    });
});
describe("JollyPassword", () => {
    
    let JollyPassword = require("./jolly-password").generate;
    
    it("should generate random password", () => {
        assert.ok(JollyPassword());
    });
});

describe("_normalize", () => {
    
    let _normalize = require("./jolly-password")._normalize;
    
    it("should return min>num<max", () => {
        assert.equal(_normalize(0,10,0),0);
        assert.equal(_normalize(0,10,-1),0);
        assert.equal(_normalize(0,10,10),10);
        assert.equal(_normalize(0,10,11),10);
        assert.equal(_normalize(0,10,5),5);
    });
     it("should ignore 69 by regenerating number", () => {
        assert.notEqual(_normalize(0,100,69), 69);
        assert.notEqual(_normalize(0,100,69), 69);
        assert.notEqual(_normalize(0,100,69), 69);
        assert.notEqual(_normalize(0,100,69), 69);
    });
});


describe("_cardinalNumber", () => {
    
    let _cardinalNumber = require("./jolly-password")._cardinalNumber;
    
    it("should convert int to cardinal number", () => {
        
        assert.equal(_cardinalNumber(1),'one');
        assert.equal(_cardinalNumber(2),'two');
        
        assert.equal(_cardinalNumber(22),'twenty two');
        assert.equal(_cardinalNumber(35),'thirty five');
        assert.equal(_cardinalNumber(48),'forty eight');
    });
    
    it("should normalize before convertion", () => {
        assert.equal(_cardinalNumber(-11),'one'); 
        assert.equal(_cardinalNumber(123),'ninety nine');
    });
    
    it("should ignore 69 by regenerating number", () => {
        assert.equal(_cardinalNumber(68),'sixty eight');
        assert.notEqual(_cardinalNumber(69),'sixty nine');
        assert.notEqual(_cardinalNumber(69),'sixty nine');
        assert.notEqual(_cardinalNumber(69),'sixty nine');
        assert.notEqual(_cardinalNumber(69),'sixty nine');
        assert.notEqual(_cardinalNumber(69),'sixty nine');
        assert.equal(_cardinalNumber(70),'seventy');
    });
});

describe('_randLineFromFile',() => {
    
   var _randLineFromFile = require("./jolly-password")._randLineFromFile;
    
    it('get random word', () => {
        let word = _randLineFromFile('./data/words.txt'); 
        assert.ok(word)
    });
    
    it('get random words each time', () => {
    
        var words = []
        for(let i=0; i<10; i++){
            words.push(_randLineFromFile('./data/words.txt'));
        }
        
        words.forEach(function(word, index){
            assert.ok(words.indexOf(word) === index)
        });  
    });
})
