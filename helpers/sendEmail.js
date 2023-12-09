const nodemailer = require("nodemailer");
require("dotenv").config();

const { GMAIL_NET_EMAIL, GMAIL_NET_PASSWORD } = process.env;

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
