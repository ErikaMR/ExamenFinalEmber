import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('crear-concepto', 'Integration | Component | crear concepto', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{crear-concepto}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#crear-concepto}}
      template block text
    {{/crear-concepto}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
