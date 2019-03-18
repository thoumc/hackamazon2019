// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require jquery_ujs


$(document).ready( function( ) {

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  $('.dropbtn').click( function(){
    $('.dropdown-content').toggle();
  });

// Close the dropdown if the user clicks outside of it
$('body').onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = getElementsByClassName('dropdown-content');
    if (!myDropdown.classList.contains('hide')) {
      myDropdown.classList.addClass('hide');
    }
  }
}

$('#trigger-filter').click( function() {
  $('.filter-panel').addClass('active');
})

$('.close-form').click( function() {
  $('.filter-panel').removeClass('active');
})



});