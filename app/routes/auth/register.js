import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    doRegister() {
      this.get('currentModel').save().then(() => {
        this.transitionTo('auth.login');
      });
    }
  }
});
