import Ember from 'ember';

export default Ember.Service.extend({
  animate($element, effect, options) {
    return Ember.$.Velocity.animate($element, effect, options);
  }
});
