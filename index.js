const express = require("express");
const axios = require("axios");
const _ = require("lodash");
const pdf = require("html-pdf");
const options = { format: "Letter" };
const nodemailer = require("nodemailer");
const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "julien.boyer@wildcodeschool.fr",
    pass: "xxx" // le mot de passe est secret
  }
});
const mailOptions = {
  from: "julien.boyer@wildcodeschool.fr", // sender address
  to: "julien.boyer@wildcodeschool.fr", // list of receivers
  subject: "Resultat des statistiques des femmes françaises", // Subject line
  attachments: [
    {
      filename: "result.pdf",
      path: "public/pdf/result.pdf"
    }
  ]
};

/**
 * Get Route
 */
app.get("/", (req, res) => {
  axios
    .get("https://randomuser.me/api/?results=500&gender=female&nat=fr")
    .then(response => {
      const femmes = response.data.results;
      // console.log(response.data.results);
      const groups = _.groupBy(femmes, element => element.location.city);
      console.log(groups);

      const statOne = {};
      for (let key in groups) {
        // console.log(key); // ville
        // console.log(groups[key]); // tableaux
        statOne[key] = groups[key].length; // nombre de femmes
      }
      console.log(statOne);

      // // Stat 2 et Stat 3 à compléter...

      // /**
      //  * Generation of HTML
      //  */
      let html = `<h3 style="color: blue">Le nombre de femmes par ville est de: </h3>`;
      html += `<ul>`;
      for (let element in statOne) {
        html += `<li style="font-style: italic">${element} : <b>${
          statOne[element]
        } femmes</b></li>`;
      }
      html += `</ul>`;
      mailOptions.html = html; // HTML in Email

      // /**
      //  * Generation of PDF since HTML and Options
      //  */
      pdf
        .create(html, options)
        .toFile("./public/pdf/result.pdf", (err, res) => {
          if (err) return console.log(err);

          // Send email
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) console.log(err);
            else console.log(info);
          });
        });

      res.send(`L'email est bien partis ! Check That !`);
    });
});

/**
 * Liste App on Express
 */
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
