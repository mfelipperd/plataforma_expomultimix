import nodemailer from 'nodemailer';
const { SMTPTransport } = require('nodemailer/lib/smtp-transport');

export default function sendEmail(data) {
  const { email, name, } = data
  
  const transporter = nodemailer.createTransport(
    new SMTPTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASS,
      },
    })
  );
  
  const mailOptions = {
    from: process.env.APP_EMAIL,
    to: email,
    subject: `Assunto do e-mail ${name}`,
    text: `Conteúdo do e-mail ${55}`
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('E-mail enviado: ' + info.response);
    }
  });
}


