// Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface Logic

$(document).ready(function () {
  $("#add-address").click(function() {
    $("#new-addresses").append ('<div class="new-address">' +
                                  '<div class="form-group">' +
                                    '<label for="new-street">Street address</label>' +
                                    '<input type="text" class="form-control" id="new-street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-city">City</label>' +
                                    '<input type="text" class="form-control" id="new-city">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-state">State</label>' +
                                    '<input type="text" class="form-control" id="new-state">' +
                                  '</div>' +
                                '</div>');
  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();

   var inputtedFirstName = $("input#new-first-name").val();
   var inputtedLastName = $("input#new-last-name").val();

   var newContact = new Contact(inputtedFirstName, inputtedLastName);

   $(".new-address").each(function() {
     var inputtedStreet = $(this).find("input#new-street").val();
     var inputtedCity = $(this).find("input#new-city").val();
     var inputtedState = $(this).find("input#new-state").val();
     var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
     newContact.addresses.push(newAddress);
   });

   $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");

   $("ul#addresses").text("");
   newContact.addresses.forEach(function(address) {
     $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
   });

   $(".contact").last().click(function () {
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
   });

   $("input#new-first-name").val(""); // this will clear out the form
   $("input#new-last-name").val("");
   $("input#new-street").val("");
   $("input#new-city").val("");
   $("input#new-state").val("");
  });
});
