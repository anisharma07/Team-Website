import nodemailer from "nodemailer";

const email = process.env.EMAIL;
// const email2 = process.env.EMAIL2;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: `${email}`,
  secure: true,
};
