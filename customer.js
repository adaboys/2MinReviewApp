'use strict';

module.exports = function(Customer) {

  var LoopBackContext = require('loopback-context');

  Customer.getUser = function(cb) {
    var ctx = LoopBackContext.getCurrentContext();
    var username = ctx && ctx.get('currentUser');
    console.log(username)
    ctx.set('foo', { bar: 'val' } );
  }
};
