$(init);
function init() {
  $("#code").animateNumber({
    number: 250
  }, 2500);
  $("#pos").animateNumber({
    number: 3
  }, 3000);
  $("#posa").animateNumber({
    number: -750
  }, 4000); 
  $("#gh").animateNumber({
    number: 2700
  }, 2000,
    function() {
    $('#gh').text('Много'),
    $('.rub').hide()
    })
};