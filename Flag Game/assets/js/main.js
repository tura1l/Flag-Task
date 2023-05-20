const flagImg = document.querySelector("#flag")
const input = document.querySelector("#exampleInputEmail1")
const btn = document.querySelector("#btn")
const div = document.querySelector("#location")
fetch('https://restcountries.com/v3.1/all/')
.then(res=>res.json())
.then(data=>{
    var randomIndex = Math.floor(Math.random() * data.length);
    var country = data[randomIndex];
    div.innerHTML +=` <img src="${country.flags.svg}" class="w-100" alt="">`
    
    btn.addEventListener("click",()=>{
      if (input.value.toLowerCase()==country.name.common.toLowerCase()) {
        alert("Dogrudur amma ki hocam kodlarima baxin plugini qosmusam amma islemir")
        successAlert("Təbrik edirəm.Düzgün cavab!")
      }
      else{
        alert("Sehvdir amma ki hocam kodlarima baxin plugini qosmusam amma islemir")
        errorAlert("Təəsüfki doğru cavab deyl.");
      }
    })
})
.catch(error => console.error(error));

function successAlert(message) {
    Command: toastr["success"](message)

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}
function errorAlert(message) {
    Command: toastr["error"](message)

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}