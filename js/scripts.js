// Business Logic
function Contact(first, last, address, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.fullAdress = function() {
  return this.address + " " + this.city + ", " + this.state;
}
// user interface Logic

$(document).ready(function () {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

   var inputtedFirstName = $("input#new-first-name").val();
   var inputtedLastName = $("input#new-last-name").val();
   var inputtedAddress = $("input#new-home-address").val();
   var inputtedCity = $("input#new-city").val();
   var inputtedState = $("input#new-state").val();

   var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedCity, inputtedState);

   $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName() + "</span></li>");

   $(".contact").last().click(function () {
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
     $(".address").text(newContact.fullAdress());
   });

   $("input#new-first-name").val(""); // this will clear out the form
   $("input#new-last-name").val("");
   $("input#new-home-address").val("");
   $("input#new-city").val("");
   $("input#new-state").val("");
  });
});
