const nodemailer = require("nodemailer");
require("dotenv").config();

const {
  GMAIL_NET_EMAIL = "varvara.babich13@gmail.com",
  GMAIL_NET_PASSWORD = "0465553BC839894C8D9FE0DC9517F8F9AFA1",
} = process.env;

const nodemailerConfig = {
  host: "smtp.elasticemail.com",
  port: 2525,
  secure: false,
  auth: {
    user: GMAIL_NET_EMAIL,
    pass: GMAIL_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: GMAIL_NET_EMAIL };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
