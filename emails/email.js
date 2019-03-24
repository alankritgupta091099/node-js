var fs= require('fs');
var path=require('path');
var config=JSON.parse(fs.readFile("package-lock.json"));

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
    secure: false, // use SSL
    port: 25,
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});////////////////////////not working