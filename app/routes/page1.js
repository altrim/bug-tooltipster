import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition() {
      alert('Just an alert box to wait a little bit');
    }
  }
});
