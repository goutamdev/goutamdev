document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:dev.goutam05@gmail.com?subject=Message from ${name}&body=${message} (from ${email})`;
    
    window.location.href = mailtoLink;
});
