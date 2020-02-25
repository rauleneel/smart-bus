var should = require('should');
var fixtures = require('./fixtures').commands;
var commands = require('../lib/commands');

var isArray = Array.isArray;

describe('Commands', function() {
  for (var code in fixtures)
    test(code, commands[parseInt(code)], fixtures[code]);

  function test(code, command, examples) {
    if (!isArray(examples)) examples = [examples];

    describe(code, function() {
      it('should parse payload', function() {
        examples.forEach(function(example) {
          should(command.parse(example.payload)).eql(example.data);
        });
      });

      it('should encode data', function() {
        examples.forEach(function(example) {
          should(command.encode(example.data)).eql(example.payload);
        });
      });
    });
  }
});
