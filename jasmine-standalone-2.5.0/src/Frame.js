/* jshint undef: true, unused: true */
/* globals Frame */

Frame = function(rolls) { 'use strict';
  this._rolls = rolls;
}

Frame.prototype = {
  totalScore: function(nextFrame, secondNextFrame) {
    if (this.isStrike()) {
      return this.strikeScore(nextFrame, secondNextFrame);
    } else if (this.isSpare()) {
      return this.spareScore(nextFrame);
    } else {
    return this.totalFrame()
  }
  },
  totalFrame: function() {
    return this._rolls.reduce(function(a,b){
      return a + b;
    })
  },
  strikeScore: function(nextFrame, secondNextFrame) {
    if (nextFrame.isStrike()) {
      return this.totalFrame() + nextFrame.totalFrame() + secondNextFrame._rolls[0];
    }
    return this.totalFrame() + nextFrame.totalFrame();
  },
  spareScore: function(nextFrame) {
    return this.totalFrame() + nextFrame._rolls[0];
  },
  isSpare: function() {
    return this._rolls[0] + this._rolls[1] === 10;
  },
  isStrike: function() {
    return this._rolls[0] === 10;
  }
}
