(function() {
    emailjs.init({
      publicKey: "bDUbIV4FHSIYSn4Kh",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_yo5r7hu', 'contact_form_go2gp0b', this)
            .then(() => {
                // console.log('SUCCESS!');
            }, (error) => {
                // console.log('FAILED...', error);
            });
    });
}

$(document).ready(function(){
    $(".boton-elegante").click(function(){
        alert("Message Send Successfully");

    });
});