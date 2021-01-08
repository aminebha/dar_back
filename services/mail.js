const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(pos) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'concoursprojetn7@gmail.com', // generated ethereal user
      pass: '@zerty2021', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"concours Projet N7" concoursprojetn7@gmail.com', // sender address
    to: "aminebha@gmail.com", // list of receivers
    subject: "Urgence accident", // Subject line
    text: "Urgence accident", // plain text body
    html: '<b>Urgent</b> <p> une personne qui a besoin de l\'aide a la <a href="https://www.google.com/maps/search/?api=1&query='+pos.latitude+','+pos.longitude+'" >Position</a><p/>', // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports= {main}
