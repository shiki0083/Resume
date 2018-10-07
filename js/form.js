// $(document).ready(function () {


//   /*============================================
//   Jquery Validation Plugin
//   ==============================================*/

//   "use strict";

//   $("#contactForm").validate({
//     debug: true,
//     rules: {
//       name: {
//         required: true,
//         minlength: 2
//       },
//       email: "required",
//       message: "required"
//     },
//     messages: {
//       name: {
//         required: "Please specify your name.",
//         minlength: "Name must be at least 2 characters."
//       },
//       email: {
//         required: "Please enter a valid email.",
//         email: "Please enter a valid email."
//       },
//       message: {
//         required: "Please leave your message."
//       }
//     },
//     errorPlacement: function (error, element) {
//       error.appendTo(element.parent().find(".errorContainer"));
//     },
//     success: function (label) {
//       label.addClass("fas fa-check");
//     },
//     highlight: function (element, errorClass, validClass) {
//       $(element).parent().find(".error").removeClass("fas fa-check");
//       $(element).parent().find(".sliding-border").addClass("sliding-border-fail").removeClass("sliding-border-success");
//       if ($(element).val() == "") {
//         $(element).parent().find(".animated-label").addClass("animated-label-fail-blank").removeClass("animated-label-success").removeClass("animated-label-fail");
//       } else {
//         $(element).parent().find(".animated-label").addClass("animated-label-fail").removeClass("animated-label-success").removeClass("animated-label-fail-blank");
//       }
//     },
//     unhighlight: function (element, errorClass, validClass) {
//       $(element).parent().find(".animated-label").removeClass("animated");
//       $(element).parent().find(".sliding-border").addClass("sliding-border-success").removeClass("sliding-border-fail");
//       if ($(element).val() == "") {
//         $(element).parent().find(".animated-label").addClass("animated-label-success").removeClass("animated-label-fail-blank").removeClass("animated-label-fail");
//       } else {
//         $(element).parent().find(".animated-label").addClass("animated-label-success").removeClass("animated-label-fail").removeClass("animated-label-fail-blank");
//       }
//     },
//     submitHandler: function () {
//       alert("success")
//       submitForm();
//     }
//   });



//   /*============================================
//   submitForm() to Firebase
//   ==============================================*/

//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBnZ5qrtDHnIdIO5Wq_oH5zjRVgsecb9eE",
//     authDomain: "contactform-697e2.firebaseapp.com",
//     databaseURL: "https://contactform-697e2.firebaseio.com",
//     projectId: "contactform-697e2",
//     storageBucket: "contactform-697e2.appspot.com",
//     messagingSenderId: "1023256597268"
//   };
//   firebase.initializeApp(config);

//   var messagesRef = firebase.database().ref('messages');

//   // Function to get form values
//   function getInputVal(id) {
//     return document.getElementById(id).value;
//   }

//   // Save message to firebase
//   function saveMessage(name, email, message) {
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       name: name,
//       email: email,
//       message: message
//     });
//   }

//   // submitForm function
//   function submitForm() {

//     // Get values
//     var name = getInputVal('name');
//     var email = getInputVal('email');
//     var message = getInputVal('message');

//     // Save message
//     saveMessage(name, email, message);

//     // Show alert
//     document.querySelector('.alert').style.display = 'block';
//     document.querySelector('#contact #contactForm h3').style.marginBottom = '0';

//     // Hide alert after 3 seconds
//     setTimeout(function () {
//       document.querySelector('.alert').style.display = 'none';
//       document.querySelector('#contact #contactForm h3').style.marginBottom = '2.5rem';      
//     }, 3000);

//     // reset form
//     document.getElementById('contactForm').reset();
//     $('#contactForm').find(".sliding-border").removeClass("sliding-border-success");
//     $('#contactForm').find(".animated-label").removeClass("animated-label-success");
//     $('#contactForm').find(".error").removeClass("fas fa-check");
//   }

// });