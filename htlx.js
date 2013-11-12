app = {};

app.Utterance = Backbone.Model.extend({

  defaults: function () {
      return {
          tags: [
          ]
      }
  },
  
  initialize: function () {
      _.bindAll(this, 'tag', 'untag');
      var self = this;
      this.on('change:tags', this.notify, this)
  },
  
  tag: function (newTags) {
      var tags = this.get('tags');
      this.set('tags', tags.concat(newTags));
      this.trigger('change:tags');
  },

  untag: function (nixTags) {
      var tags = _.without(this.get('tags'), nixTags);
      this.set('tags', tags);
      this.trigger('change:tags');
  }

})



app.Word = Backbone.Model.extend({

  defaults : { 

  },

  initialize : { 

  },
  


})


app.Lexicon = Backbone.Collection.extend({

  model : app.Word,

  initialize : function(){
    _.bindAll(this, 'search', 'loadURL');
  },

  /* load an external URL into the collection */
  loadURL : function(url){
 
    this.originalUrl = this.url;
    this.url = url;
    this.fetch(); // or maybe just this.fetch({ url: url }); ? 
    this.url = this.originalUrl;

  },  

  search : function(query){
    return  
  }  


})


app.Transcript = Backbone.Collection.extend({

  initialize: function(){
  },

  url: function(){ return this.url },

  model: app.Utterance,

  parse: function(data){
    return data;
  }

})

