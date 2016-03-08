var addEntry = function(e) {
  e.preventDefault();
  var fName = $('#firstName').val();
  var lName = $('#lastName').val();
  var phone = $('#phone').val();
  var entry = $('<li>' + fName + '\t' + lName + '\t' + phone + '</li>');
  $('#list').append(entry);
  clear(e);
};
var clear = function(e) {
  e.preventDefault();
  $('#firstName').val('');
  $('#lastName').val('');
  $('#phone').val('');
};

$('#add').on('click', addEntry);
$('#clear').on('click', clear);
