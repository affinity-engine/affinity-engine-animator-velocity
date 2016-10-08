/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

var count = 0;

function findRoot(current) {
  var app;

  // Keep iterating upward until we don't have a grandparent.
  // Has to do this grandparent check because at some point we hit the project.
  do {
    app = current.app || app;
  } while (current.parent && current.parent.parent && (current = current.parent));

  return app;
}

module.exports = {
  name: 'affinity-engine-animator-velocity',

  treeForVendor: function(){
    var _this = this;

    var treeify = function treeify(name) {
      var treePath = path.dirname(require.resolve(name));
      return pickFiles(_this.treeGenerator(treePath), {
        srcDir: '/',
        destDir: name
      });
    }

    return mergeTrees([
      treeify('velocity-animate')
    ]);
  },

  treeForAddon: function() {
    var app = findRoot(this);

    app.import('vendor/velocity-animate/velocity.js');
    app.import('vendor/velocity-animate/velocity.ui.js');

    return this._super.treeForAddon.apply(this, arguments);
  }
};
