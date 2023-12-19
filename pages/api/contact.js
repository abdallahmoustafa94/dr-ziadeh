import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import cors from "cors";

const corsMiddleware = cors({
  origin: "http://localhost:3000", // Replace with the origin(s) of your front-end app
  methods: ["POST"],
  optionsSuccessStatus: 204, // Return a 204 status for preflight requests
});

const transporter = {
  auth: {
    api_key: "...", // Your SendGrid API key here
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  // Apply the CORS middleware
  await corsMiddleware(req, res);

  if (req.method === "OPTIONS") {
    // Respond to the preflight request with a 204 status
    res.status(204).end();
    return;
  }

  const { name, email, number, subject, text } = req.body;

  const data = {
    to: "dimo.am@gmail.com", // Update with your recipient's email address
    from: email,
    subject: subject,
    text: text,
    html: `
      <b>From:</b> ${name} <br /> 
      <b>Number:</b> ${number} <br /> 
      <b>Subject:</b> ${subject} <br /> 
      <b>Message:</b> ${text} 
    `,
  };

  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing email");
  }
};
