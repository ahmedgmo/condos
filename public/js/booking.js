// When user clicks add-btn

var partyDuration = $("#startTime").val() - $("#endTime").val();
console.log(partyDuration);

// $("#duration").html(`<div class="col-sm-10">
// <input type="number" class="form-control" placeholder="Duration" id="duration" name="guestCount" value=${partyDuration} disabled>
// </div>`);
function parseTime(time) {
  time = time.split(':');
  return (Number(time[0])) + (Number(time[1]) / 60); 
}

function calculateCost() {
  let duration = Number($('#duration').val());
  let securityNeeded = security();
  let guestCount = Number($('#guestCount').val());

  let cost = 100;
  if (duration && securityNeeded) {
    cost += duration * 26;
  }

    $('#costs').val(cost);
}

$("#startTime, #endTime").on('change', function(event) {
  console.log("change");
  let date1 = $("#startTime").val();
  let date2 = $("#startTime").val();
  if (date1 && date2) {
    var startTime = parseTime($("#startTime").val());
    var endTime = parseTime($("#endTime").val());
    console.log(startTime, endTime);
    
    var hours = Math.abs(endTime - startTime);
    console.log(hours);
    $('#duration').val(hours);

    calculateCost();
    
  }

});

$("#guestCount").on('change', function() {
  calculateCost();
  let securityNeeded = security();
  $('#security').val(securityNeeded ? 'Yes' : 'No');
})


$("#newBooking").on("click", function(event) {
  var data = $("#bookingForm")
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

  console.log(data);

  $.post("/api/bookings", data);
});

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
    guestCount = $("#guestCount").val();
    alcohol = alcoholStatus;
    if (guestCount > 30 || alcoholStatus === true) {
      return true;
    } else {
      return false;
    }
  };