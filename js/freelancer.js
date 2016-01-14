/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// function source(){
//   console.log('si llega hasta aqui')

//   if (document.referrer.search('https?://(.*)google.([^/?]*)') === 0) {
//     console.log('Google')
//   } else if (document.referrer.search('https?://(.*)bing.([^/?]*)') === 0) {
//     console.log('Bing')
//   } else if (document.referrer.search('https?://(.*)yahoo.([^/?]*)') === 0) {
//     console.log('Yahoo')
//   } else if (document.referrer.search('https?://(.*)facebook.([^/?]*)') === 0) {
//     console.log('Facebook')
//   } else if (document.referrer.search('https?://(.*)twitter.([^/?]*)') === 0) {
//     console.log('Twitter')
//   } else {
//     console.log('other')
//   }
// }

// source();
// console.log('si llega hasta acá')


