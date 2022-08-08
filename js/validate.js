$(document).ready(function () {
  //Detect that a user has started entering their name itno the name input
  // Name can't be blank

  $("#fname").on("input", function () {
    var input = $(this);
    var is_name = input.val();
    if (is_name) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $("#lname").on("input", function () {
    var input = $(this);
    var is_name = input.val();
    if (is_name) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  // Email must be an email
  $("#email").on("input", function () {
    var input = $(this);
    var re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email = re.test(input.val());
    if (is_email) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });
  $("#hex1").on("input", function () {
    var input = $(this);
    var re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var is_hex = re.test(input.val());
    if (is_hex) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });
  $("#hex2").on("input", function () {
    var input = $(this);
    var re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var is_hex = re.test(input.val());
    if (is_hex) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  // After Form Submitted Validation
  $("#gsubmit #submit").click(function (event) {
    var form_data = $("#gform").serializeArray();
    var re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var rehex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var error_free = true;
    var fname = form_data[0].value;
    var lname = form_data[1].value;
    var email = form_data[2].value;
    var hex1 = form_data[3].value;
    var hex2 = form_data[4].value;
    for (var input in form_data) {
      if (
        (form_data[input]["name"] === "fname" ||
          form_data[input]["name"] === "lname") &&
        !$("#" + form_data[input]["name"]).val()
      ) {
        error_free = false;
      } else if (
        form_data[input]["name"] === "email" &&
        !re.test($("#" + form_data[input]["name"]).val())
      ) {
        error_free = false;
      } else if (
        (form_data[input]["name"] === "hex1" ||
          form_data[input]["name"] === "hex2") &&
        !rehex.test($("#" + form_data[input]["name"]).val())
      ) {
        error_free = false;
      }
    }
    if (!error_free) {
      event.preventDefault();
      alert("Please enter valid input");
    } else {
      var data = {
        fname: fname,
        lname: lname,
        email: email,
        hex: hex1 + "@" + hex2,
      };

      var existingGradients = JSON.parse(
        localStorage.getItem("localGradients")
      );
      console.log(existingGradients);

      if (existingGradients === null) {
        existingGradients = [];
      }
      console.log(existingGradients);
      localStorage.setItem("entry", JSON.stringify(data));
      existingGradients.push(data);
      localStorage.setItem("localGradients", JSON.stringify(existingGradients));
      alert("Success!! Gradients submitted successfully");
    }
  });
});
