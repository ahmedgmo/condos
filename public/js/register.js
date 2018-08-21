$("#newUser").on("click", function(event) {
  event.preventDefault();
  var data = $("#registerForm")
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

  console.log(data);

  $.post("/api/users", data).then(window.location.replace("/dashboard"));
});
