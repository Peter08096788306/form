const display = document.querySelector(".display");
const gray = document.querySelector(".Gray--color");
const form = document.querySelector(".form");
const empty = document.querySelector(".empty");
const empty1 = document.querySelector(".empty1");
const empty2 = document.querySelector(".empty2");
const display2 = document.querySelector(".display2");
const logln = document.querySelector(".Login--form");

const form2 = document.querySelector(".form2");
const text = document.querySelector(".text");
const icon = document.querySelector(".icon");
const para = document.querySelector(".para");

display.addEventListener('click', () => {
    form2.style.display = "none"
    empty.style.display = "block"
    empty1.style.display = "block"
    empty2.style.display = "none"
    text.style.display = "none"
    icon.style.display = "none"
    form.classList.add("open")
    logln.classList.add("gin")
    // empty2.classList.add("none")
    display.classList.add("change")
    display2.classList.add("gray")
    form.classList.add("change")
    gray.classList.add("change")
    para.classList.add("who")

    if (form2.classList.contains("open")) {
        form2.classList.remove("open")
    } else {
        form2.classList.remove("open")
    }
})

display2.addEventListener("click", () => {
    form2.classList.add("open")
    empty1.style.display = "none"
    empty2.style.display = "block"
    form2.style.display = "block"
    icon.style.display = "block"
    text.style.display = "block"
    // empty2.classList.add("none")
    if (form.classList.contains("open")) {
        empty2.classList.remove("none")
        display2.classList.remove("gray")
        form.classList.remove("open")
        gray.classList.add("red")

    } else {
        form.classList.remove("open")
    }
})



document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var formData = new FormData(this);
  
    // Convert form data to a plain object
    var formDataObject = {};
    formData.forEach(function(value, key) {
      formDataObject[key] = value;
    });
  
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formDataObject));
  
    // Optional: Display a success message or perform any other desired actions
  
    // Reset the form
    this.reset();
  });

  

  document.addEventListener('DOMContentLoaded', function() {
    // Retrieve form data from local storage
    var storedData = localStorage.getItem('formData');
  
    if (storedData) {
      // Parse the JSON string back to an object
      var formDataObject = JSON.parse(storedData);
  
      // Get a reference to the form
      var form = document.getElementById('myForm');
  
      // Loop through the form fields and set their values
      for (var key in formDataObject) {
        if (formDataObject.hasOwnProperty(key)) {
          var field = form.elements[key];
          if (field) {
            field.value = formDataObject[key];
          }
        }
      }
    }
  });
  
