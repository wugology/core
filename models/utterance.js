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

