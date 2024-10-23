function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    Email.send({
        SecureToken: "ob1b19ad-c6ae-4644-b492-8f7aa408b3ee", // Replace with your SMTPJS Secure Token
        To: "dev.goutam05@gmail.com",
        From: email,
        Subject: "New Contact Form Submission from " + name,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(
        message => alert("Email sent successfully!")
    ).catch(
        error => alert("Failed to send email: " + error)
    );

    return false; // Prevent default form submission
}
