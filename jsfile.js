$(document).ready(function() {
    $('.invalidmsg').hide();
    // Prevent the default form submission action
    $("#myForm").submit(function(event) {
      event.preventDefault();
      var email = $("#email").val();

      // Regular expression for a valid email format
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      // Check if the entered email matches the pattern
      if (emailPattern.test(email)) {
        // Valid email, you can perform additional actions
        $("#email").removeClass("invalid-email");
        $('.invalidmsg').hide();
        Swal.fire({
           

            iconHtml: '',
            html: `
            <div class="custom-layout mb-4">
              <img src="./assets/images/icon-success.svg" alt="Custom Image">
            </div>
            <div class="custome-layout-box">
              <h3 class="text-start fw-bold mb-0 ">Thanks for</h3>
              <h3 class="text-start fw-bold mb-3">subscribing!</h3>
              <ul class="mb-0">
                <li><p>A confirmation has been sent to </p></li>
                <li><p><b>`+email+`</b>. Please open it and click </p></li>
                <li><p>the button inside to confirm your subscription. </p></li>
              </ul>
              <div class="mt-3">
              <button class="custom-confirm mt-2">Dismiss message</button>
              </div>
            </div>
          
            
          `,
          customClass: 'custom-sweetalert', 
            imageWidth: 40, // Set the width of the image
            imageHeight: 40,
            showCancelButton: false,
            showCancelButton: false, // Remove the "Cancel" button
            showConfirmButton:false,
           
          });
          document.querySelector('.custom-confirm').addEventListener('click', function () {
            Swal.close();
            $("#email").val("");
            // You can add your own logic here
          });
    
//alert("Valid email address");
      } else {
        // Invalid email, you can handle the case of an invalid email
        $("#email").addClass("invalid-email");
        $('.invalidmsg').show();
       // alert("Invalid email address");
      }
      // You can perform additional actions here
    });

  });