app.Transcript = Backbone.Collection.extend({

  initialize: function(){
  },

  url: function(){ return this.url },

  model: app.Utterance,

  parse: function(data){
    return data;
  }

})
