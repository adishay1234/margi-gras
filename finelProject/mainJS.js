
const second = 1000,
 minute = second * 60,
 hour = minute * 60,
 day = hour * 24;

var countDown = new Date("may 24, 2021 00:00:00").getTime(),
  x = setInterval(function() {
    
      var now = new Date().getTime(),
        distance = countDown - now;
  
  document.getElementById('days').innerHTML = Math.floor(distance / (day)),
  document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),               document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);
    
    }, second)

    function active_course() {
      if ($(".active_course").length) {
        $(".active_course").owlCarousel({
          loop: true,
          margin: 20,
          items: 3,
          nav: true,
          autoplay: 2500,
          smartSpeed: 1500,
          dots: false,
          responsiveClass: true,
          thumbs: true,
          thumbsPrerendered: true,
          navText: ["<img src='https://colorlib.com/preview/theme/edustage/img/prev.png'>", "<img src='https://colorlib.com/preview/theme/edustage/img/next.png'>"],
          responsive: {
            0: {
              items: 1,
              margin: 0
            },
            991: {
              items: 2,
              margin: 30
            },
            1200: {
              items: 3,
              margin: 30
            }
          }
        });
      }
    }
    active_course(); 

    (function($) {
      'use strict';
      $(function () {
          //Event carousel
          $("#events").owlCarousel({
              loop:true,
              margin:0,
              autoPlay: 3000,
              responsive:{
                  0:{
                      items:1
                  },
                  768:{
                      items:2
                  },
                  979:{
                      items:3
                  },
                  1199:{
                      items:4
                  }
              },
              singleItem : false,
              dots: false,
              nav: true,
              navText : ["",""]
          });
          $(".btn-event-show").collapse();
          //Events: Tooltip
          $('.event-user').tooltip({ boundary: 'window' });
          feather.replace();
      });
  })(jQuery); 
  