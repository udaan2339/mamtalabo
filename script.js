document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;

    let message = `New Appointment!%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}`;
    let whatsappURL = `https://wa.me/8562033666?text=${message}`;

    window.location.href = whatsappURL;
});
