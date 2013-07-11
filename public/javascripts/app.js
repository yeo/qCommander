define(['jquery', 'underscore', 'backbone',  'firebase', 'buzz', 'localStorage', 'bootstrap'], function ($, _, Backbone, buzz, __Firebase__) {
  "use strict";
  var VERSION_LEVEL = "0.1.0.9" //major.minor.patch.update_cache_clean_number
  var remoteQueu

  var appView, mcView, resultView, rewardStockCpView, winnerListView, Rewards, winners
    
    
  var AppView = Backbone.View.extend({
      tagName: 'div',
      className: 'qcommander',
      id: '#qcommander',
      template: _.template('<div style=""><%= token%></div>'),


      initialize: function(){ 
        remoteQueu = new Firebase('https://qcommander.firebaseio-demo.com/');
        remoteQueu.limit(200).on('child_added', function (snapshot) {
          var message = snapshot.val();
          console.log(message)
          switch (message.cmd) {
            case 'next':
              var f = $('.speakerdeck-iframe');
              // $('.controls > a.next', f.contents()).click()
              $('.controls > a.next').click()
              break;
            case 'prev':
              var f = $('.speakerdeck-iframe');
              $('.controls > a.prev').click()
              break;
          }

          
        })
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

  //Remote function 
  function Remote() {
    this.exec = function () {

    }
    this.test = function() {
      console.log('run')    
    }
    return this;
  }

  // var r = new Remote;
  // console.log(r);
  // r.test();

  // r.prototype.next = function () {
  //   $('a.next').click()
  // }

  // r.prototype.previos = function () {
  //   $('a.next').click()
  // }

  //Listen to socket

  return {
    init: function () {
      appView = new AppView()      
    }
  }

})
