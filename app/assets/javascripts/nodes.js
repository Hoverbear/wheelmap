// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require jquery/jquery.cookies.js
//
//= require bootstrap-transition
//= require bootstrap-button
//= require bootstrap-collapse
//= require bootstrap-dropdown
//= require bootstrap-modal
//= require bootstrap-tooltip
//= require bootstrap-popover
//= require bootstrap-select
//
//= require flash.js

(function() {
  var $container = $('#node'),
    switchPlacement = 200;

  $container.find('[data-toggle="popover"]').popover({
    placement: function(popover, element) {
      var $element = $(element),
        delta = $(window).width() - ($element.width() + $element.offset().left);

      return delta >= switchPlacement ? 'right' : 'left';
    }
  });
})(jQuery);