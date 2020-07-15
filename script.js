require("dotenv").config();
const fs = require('fs');

const object = {
    API_KEY: process.env.API_KEY,
    CLIENT_ID: process.env.CLIENT_ID
}

fs.writeFileSync("./src/assets/keys.json", JSON.stringify(object));