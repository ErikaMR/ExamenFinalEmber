import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	actions:{
    	gFactura(){
		      let factura=this.get('model');
		      factura.save().then(()=>{
		        Ember.RSVP.all(factura.get('conceptos').invoke('save') ).then(()=>{
		          swal('La factura se guardó correctamente');
		          this.transitionToRoute('lista-fac');
		        })        
		      })
		},
		nConcepto(){
		      let concepto=this.store.createRecord('concepto', {
		        factura: this.get('model')
		      });
		}
  	}
});
