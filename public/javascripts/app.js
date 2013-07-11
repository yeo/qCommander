define(['jquery', 'underscore', 'backbone',  'firebase', 'buzz', 'localStorage', 'bootstrap'], function ($, _, Backbone, buzz, __Firebase__) {
  "use strict";
  var VERSION_LEVEL = "0.1.0.9" //major.minor.patch.update_cache_clean_number
    
  var appView, mcView, resultView, rewardStockCpView, winnerListView, Rewards, winners
    
    
  var AppView = Backbone.View.extend({
      tagName: 'div',
      className: 'qcommander',
      id: '#qcommander',
      template: _.template('<div style=""><%= token%></div>'),

      initialize: function(){ 
        var myDataRef = new Firebase('https://gef8s5inxg8.firebaseio-demo.com/');
        this.render(); 
      },

      render: function(){
        this.$el.html(this.template({token: '3sa4'})); 
        console.log(this.$el)
        $('body').append(this.$el)
        return this;
      },

      events: {
          "click #spin": "doPlay",
          "hover #spin": "animatePlayButton"
      },

      doPlay: function () {
        this.r.spin();
      },

      animatePlayButton: function () {
          this.playButton.transform({
              rotate: 90
          })
      },

      resetData: function () {
        this.r.setAwards(Rewards)
      }

  })

  return {
    init: function () {
      appView = new AppView()      
    }
  }

})
