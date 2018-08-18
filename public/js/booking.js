// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var partyDuration = $("#startTime").val() - $("#endTime").val();
  console.log(partyDuration);

  var alcoholStatus = function() {
    var alcohol = document.getElementsByName("alcoholChoice");
    for (var i = 0, length = alcohol.length; i < length; i++) {
      if (alcohol[i].checked) {
        // do whatever you want with the checked radio
        return alcohol[i].value;
      }
    }
  };

  var security = function() {
    guestCount = $("#guestCount");
    alcohol = alcoholStatus;
    if (guestCount > 30 || alcoholStatus === true) {
      return true;
    } else {
      return false;
    }
  };

  // Make a newBook object
  var newBooking = {
    date: $("#partyDate").val(),
    guests: $("#guestCount")
      .val()
      .trim(),
    starAt: $("#startTime").val(),
    endAt: $("#endTime").val(),
    duration: partyDuration,
    alcohol: alcoholStatus,
    secGuard: security
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/bookings", newBooking)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#author").val("");
  $("#genre").val("");
  $("#pages").val("");
});
