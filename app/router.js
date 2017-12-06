import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('crear-factura');
  this.route('lista-fac', {path:'/'});
});

export default Router;
