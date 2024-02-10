$(document).ready(function () {
  const url = `http://${window.location.hostname}:5001/api/v1/status/`;
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  const amenitie = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenitie[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenitie[$(this).attr('data-id')];
    }
    const names = Object.values(amenitie);
    if (names.length > 0) {
      $('.amenities h4').text(names.join(', '));
    } else {
      $('.amenities h4').html('&nbsp;');
    }
  });
});
