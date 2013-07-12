define(['jquery-private', 'underscore', 'backbone',  'firebase', 'buzz', 'localStorage', 'bootstrap'], function ($_, _, Backbone, buzz, __Firebase__) {
  "use strict";
  var VERSION_LEVEL = "0.1.0.9" //major.minor.patch.update_cache_clean_number
  var remoteQueu

  var appView, mcView, resultView, rewardStockCpView, winnerListView, Rewards, winners
    
    
  var AppView = Backbone.View.extend({
      tagName: 'div',
      className: 'qcommander',
      id: '#qcommander',
      template: _.template('<div style="text-align: center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=<%= token%>" alt="Waiting for token" /></div>'),

      uuid: function guidGenerator() {
          var S4 = function() {
             return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
          };
          return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
      },

      initialize: function(){ 
        remoteQueu = new Firebase('https://qcommander.firebaseio-demo.com/command_queues');
        remoteQueu.limit(200).on('child_added', function (snapshot) {
          
          console.log(snapshot)
          var message = snapshot.val();
          console.log(message)
          switch (message.cmd) {
            case 'next':
              var f = $('.speakerdeck-iframe');
              // $('.controls > a.next', f.contents()).click()
              console.log($('.controls > a.next'))
              $('.controls > a.next').click();

              $('.nav .btnNext').length && $('.nav .btnNext').click()
              break;
            case 'prev':
              var f = $('.speakerdeck-iframe');
              $('.controls > a.prev').click();

              $('.nav .btnPrevious').length && $('.nav .btnNext').click()
              break;
          }
          //Okay, remove that command
          var r = new Firebase("https://qcommander.firebaseio-demo.com/command_queues/".concat(snapshot.name()))
          r.remove()
          
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
