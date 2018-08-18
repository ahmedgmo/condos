// Get references to page elements
var $userFirstName = $("#firstName");
var $userLastName = $("#lastName");
var $userEmail = $("#email");
var $userCellNum = $("#cellNum");
var $userUnitNum = $("#unitNum");
var $userPassword = $("#password");
var $submitBtn = $("#newUser");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getUser: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  deleteUser: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var newUser = {
    first_name: $userFirstName.val().trim(),
    last_name: $userLastName.val().trim(),
    email: $userEmail.val().trim(),
    cellphone: phoneFormatter.format($userCellNum,"(NNN), NNN-NNNN"),
    unit_num: $userUnitNum.val().trim(),
    password: $userPassword
  };

  if (!(newUser.first_name && newUser.last_name && newUser.email && newUser.cellphone && newUser.unit_num && newUser.password)) {
    alert("You must fill all fields");
    return;
  }

  API.saveUser(newUser).then(function() {
    console.log("User saved successfully");
  });

  $userFirstName.val("");
  $userLastName.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
