var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ //2 objext
  service: 'gmail',
  auth: {
    user: 'gerald.briyolan2002@gmail.com',
    pass: 'zxuy ltvq zhjr tqip'
  }
});

var mailOptions = {
  from: 'gerald.briyolan2002@gmail.com',
  to: 'gerald.202036@sxcce.edu.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){ //send mail method
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});