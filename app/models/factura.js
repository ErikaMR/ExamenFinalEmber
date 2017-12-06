import DS from 'ember-data';

export default DS.Model.extend({
	fecha: DS.attr('date'),
	folio: DS.attr('number'),
	serie: DS.attr('string'),
	formaPago: DS.attr('number'),

	conceptos: DS.hasMany('concepto'),

	subtotal: Ember.computed('conceptos.@each.precio', function(){
    var sub = null;
    this.get('conceptos').forEach(function(concepto) {
      sub += Number(concepto.get('precio') * concepto.get('cantidad'));
    });
    return sub;
  	}),

    total: Ember.computed('conceptos.@each.precio', function(){
      var x = null;
      this.get('conceptos').forEach(function(concepto) {
        x += Number((concepto.get('precio') * concepto.get('cantidad'))-concepto.get('descuento'));
      });
      return x;
    })

});
