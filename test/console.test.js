/**
 * Module dependencies.
 */

var groundskeeper = require('../'),
    assert = require('assert'),
    fs = require('fs'),
    fixture = function (name) {
        return fs.readFileSync(__dirname + '/fixtures/' + name + '.js', 'utf8');
    };

module.exports = {
    'remove console statements': function () {
        var file = fixture('console/example'),
            clean = fixture('console/example.clean'),
            cleaner = groundskeeper({
                debugger: true,
                pragmas: ['validation', 'development']
            });

        cleaner.write(file);
        assert.equal(cleaner.toString(), clean);
    },

    'remove console statements minified': function () {
        var file = fixture('console/example.min'),
            clean = fixture('console/example.min.clean'),
            cleaner = groundskeeper({
                debugger: true,
                pragmas: ['validation', 'development']
            });

        cleaner.write(file);
        assert.equal(cleaner.toString(), clean);
    }
};
