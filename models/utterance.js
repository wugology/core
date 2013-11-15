app.Utterance = Backbone.Model.extend({

  defaults: function () {
      return {
          id: '',
          tags: [
          ]
      }
  },
  
  initialize: function () {
      _.bindAll(this, 'tag', 'untag');
      var self = this;
  },
  
  tag: function (tags) {
      var tags = _.unique(this.get('tags').concat(tags));
      this.set('tags', tags);
      this.trigger('change:tags');
  },

  untag: function (nixTags) {
      var tags = _.without(this.get('tags'), nixTags);
      this.set('tags', tags);
      this.trigger('change:tags');
  }

})

