AOS.init();

// Loader
$(window).on('load', function() {
  $('.loading').animate({
    width: 0
  }, 1000)
})

// Preview project
$('#first-link').hover(
  function() {
  $('#first-preview').css('opacity', '1').css('transition', '0.5s ease-in')
}, function() {
  $('#first-preview').css('opacity', '0 ').css('transition', '0.5s ease-in')
})

$('#second-link').hover(
  function() {
  $('#second-preview').css('opacity', '1').css('transition', '0.5s ease-in')
}, function() {
  $('#second-preview').css('opacity', '0 ').css('transition', '0.5s ease-in')
})

$('#third-link').hover(
  function() {
  $('#third-preview').css('opacity', '1').css('transition', '0.5s ease-in')
}, function() {
  $('#third-preview').css('opacity', '0 ').css('transition', '0.5s ease-in')
})

$('#fourth-link').hover(
  function() {
  $('#fourth-preview').css('opacity', '1').css('transition', '0.5s ease-in')
}, function() {
  $('#fourth-preview').css('opacity', '0 ').css('transition', '0.5s ease-in')
})
