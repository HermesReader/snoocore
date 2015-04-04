/*
   A basic throttle manager. Exposes 1 functoin `wait` that
   will return a promise that resolves once we've waited the proper
   amount of time, e.g.

   var throttle = new Throttle();

   throttle.wait() // resolves after 1ms
   throttle.wait() // resolves after 10001ms
   throttle.wait() // resolves after 2001ms

 */

import when from 'when';
import delay from 'when/delay';

module.exports = Throttle;
function Throttle(throttleMs) {

  var self = this;

  // default to 1000ms delay
  self._throttleMs = throttleMs || 1000;

  /*
     The current throttle delay before a request will go through
     increments every time a call is made, and is reduced when a
     call finishes.

     Time is added & removed based on the throttle variable.
   */
  self._throttleDelay = 1;

  self.wait = function() {
    // resolve this promise after the current throttleDelay
    var delayPromise = delay(self._throttleDelay);

    // add throttleMs to the total throttleDelay
    self._throttleDelay += self._throttleMs;

    // after throttleMs time, subtract throttleMs from
    // the throttleDelay
    setTimeout(function() {
      self._throttleDelay -= self._throttleMs;
    }, self._throttleMs);

    return delayPromise;
  };

  return self;
}
