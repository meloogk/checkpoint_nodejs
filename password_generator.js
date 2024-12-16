const generatePassword = require("generate-password");

const password = generatePassword.generate({
    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: false,
    strict: true,
});

console.log("Generated Password:", password);
