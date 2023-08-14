//Toastr
document.addEventListener("DOMContentLoaded", function() {
    toastr.options = {
      positionClass: "toast-top-right",
      closeButton: true,
      progressBar: true,
    };

    const copyButton = document.getElementById("copyButton");

    copyButton.addEventListener("click", function() {
      const phoneNumber = "0620169685"; // Replace with your actual phone number
      const tempInput = document.createElement("input");
      
      tempInput.value = phoneNumber;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      toastr.success("Phone number copied!");
    });
  });

//Open links
function openNewTab(link) {
    event.preventDefault();
    window.open(link, '_blank');
  }  