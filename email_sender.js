const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "votre.email@gmail.com", // Remplacez par votre e-mail
        pass: "votre.mot.de.passe",   // Remplacez par votre mot de passe
    },
});

const mailOptions = {
    from: "gouakou@gmail.com",
    to: "gouakoupro@gmail.com", 
    subject: "Hello from Node.js",
    text: "Ceci est un e-mail envoyé depuis un programme Node.js !",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
    } else {
        console.log("E-mail envoyé :", info.response);
    }
});
