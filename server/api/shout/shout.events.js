/**
 * Shout model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Shout = require('../../sqldb').Shout;
var ShoutEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ShoutEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Shout.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    ShoutEvents.emit(event + ':' + doc._id, doc);
    ShoutEvents.emit(event, doc);
    done(null);
  }
}

module.exports = ShoutEvents;
