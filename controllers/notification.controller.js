
var Mailjet = require('node-mailjet').connect('a18eb511ed2ca0640e1d583a1a3d3dae', 'dce3dc8f3dc211cba1517a0ad85a539e');



// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main(){

// // Generate test SMTP service account from ethereal.email
// // Only needed if you don't have a real mail account for testing
// let testAccount = await nodemailer.createTestAccount();
  
// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//   host: "smtp.googlemail.com",
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
// user: 'victorpalma0720@gmail.com', // generated ethereal user
// pass: 'Blitzkrieg25' // generated ethereal password
//   }
// });
  
// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>" // html body
// });
  
// console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
// // Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   }
  

exports.sendEmail = function(req, res, next) {

// const toEmail = "support@santanapianomovers.net";
const toEmail = "victorpalma0720@gmail.com";

const data = req.body;
  const request = Mailjet
.post("send", {'version': 'v3.1'})
.request({
"Messages":[
{
"From": {
"Email": "website@santanapianomovers.com",
"Name": "Santana Piano Movers Website"
},
"To": [
{
"Email": toEmail,
"Name": "Support @ Santana Piano Movers"
}
],
"Subject": "Quote Request from wwww.santanapianomovers.com | " + data.customer,
"HTMLPart": "<table class=\"body\" data-made-with-foundation=\"\"\r\n style=\"Margin:0;background:#39f!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%\">" +  
  "\r\n <tbody>\r\n <tr style=\"padding:0;text-align:left;vertical-align:top\">\r\n" + 
  "<td class=\"float-center\" align=\"center\" valign=\"top\"\r\n style=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;float:none;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word\">\r\n" + 
  "<center data-parsed=\"\" style=\"min-width:580px;width:100%\">\r\n <table class=\"spacer float-center\"\r\n style=\"Margin:0 auto;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:100%\">\r\n<tbody>\r\n " +
  "<tr style=\"padding:0;text-align:left;vertical-align:top\">\r\n <td height=\"16px\"\r\n style=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n<\/td>\r\n <\/tr>\r\n<\/tbody>\r\n <\/table>\r\n" + 
  "<table align=\"center\" class=\"container float-center\"\r\n style=\"Margin:0 auto;background:#fefefe;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:580px\">\r\n<tbody>\r\n" + 
  "<tr style=\"padding:0;text-align:left;vertical-align:top\">\r\n <td\r\n style=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
  "<table class=\"spacer\"\r\ntyle=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n <tbody>\r\n<tr style=\"padding:0;text-align:left;vertical-align:top\">\r\n<td height=\"16px\"\r\n style=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n" + 
  "<table class=\"row\"\r\n style=\"border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n" + 
  "<tr style=\"padding:0;text-align:left;vertical-align:top\">\r\n<th class=\"small-12 large-12 columns first last\"\r\n style=\"Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;text-align:left;width:564px\">\r\n " + 
  "<table\r\n style=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n " + 
  "<tr\r\n style=\"padding:0;text-align:left;vertical-align:top\">\r\n<th\r\n style=\"Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left\">\r\n" + 
  "<p\r\n style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n "+
  "<img src=\"https:\/\/s3-us-west-2.amazonaws.com\/piano-movers-uploads\/santana-logo.png\"\r\n style=\"-ms-interpolation-mode:bicubic;clear:both;display:block;max-width:100%;outline:0;text-decoration:none;width:auto\">\r\n<\/p>\r\n" +  
  "<h1\r\n style=\"Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:34px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left;word-wrap:normal\">\r\nYou got a new quote request!<\/h1>\r\n" + 
  "<p\r\n  style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\nThe following was generated from\r\n www.santanapianomovers.com<\/p>\r\n" + 
  "<table class=\"spacer\"\r\n style=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n<tr\r\n style=\"padding:0;text-align:left;vertical-align:top\">\r\n<td height=\"16px\"\r\n style=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n" + 
  "<table class=\"callout\"\r\n style=\"Margin-bottom:16px;border-collapse:collapse;border-spacing:0;margin-bottom:16px;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n<tr\r\n style=\"padding:0;text-align:left;vertical-align:top\">\r\n <th class=\"callout-inner secondary\"\r\n style=\"Margin:0;background:#ebebeb;border:1px solid #444;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:10px;text-align:left;width:100%\">\r\n" + 
  "<table class=\"row\"\r\n style=\"border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n<tr\r\n style=\"padding:0;text-align:left;vertical-align:top\">\r\n<th class=\"small-12 large-6 columns first\"\r\n style=\"Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:0!important;padding-right:0!important;text-align:left;width:50%\">\r\n" + 
  "<table\r\n style=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n" + 
  "<tbody>\r\n <tr\r\n  style=\"padding:0;text-align:left;vertical-align:top\">\r\n<th\r\n style=\"Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left\">\r\n<p\r\n style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n " + 
      "<p\r\n  style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n" + 

      "<strong>Customer<\/strong><br>"+ data.customer +"\r\n<\/p>\r\n " + 
			"<p\r\n style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n " +             
			"<strong>Phone<\/strong><br>"+ data.phone +"\r\n<\/p>\r\n " + 
			"<p\r\n style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n " + 
			" <strong>Email\r\n Address<\/strong><br>" + data.email + "\r\n" + 
			"<\/p>\r\n <p\r\n style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n" + 
			"<strong>How\r\n  did\r\n they\r\n  hear\r\n from\r\n us?<\/strong><br>"+ data.hear_about +"\r\n<\/p>\r\n<\/th>\r\n  <\/tr>\r\n  <\/tbody>\r\n  <\/table>\r\n  <\/th>\r\n " + 
			"<th class=\"small-12 large-6 columns last\"\r\n style=\"Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:0!important;padding-right:0!important;text-align:left;width:50%\">\r\n" + 
			"<table\r\n style=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n " + 
			"<tr\r\n  style=\"padding:0;text-align:left;vertical-align:top\">\r\n<th\r\n  style=\"Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left\">\r\n" + 
			"<p\r\n   style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n" + 
			"<strong>Anticipated\r\n Date:<\/strong><br>" + data.movingdate + "\r\n  <\/p>\r\n" +
			" <p\r\n  style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n" + 
			" <strong>Will\r\n  need\r\n  storage?<\/strong><br>" + data.storage +"\r\n <\/p>\r\n <p\r\n style=\"Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left\">\r\n" + 
			"<strong>Will\r\n  need\r\n  crating?<\/strong><br>"+ data.crating +"\r\n<\/p>\r\n<\/th>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n<\/th>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n<\/th>\r\n" + 
			" <th class=\"expander\"\r\n style=\"Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0\">\r\n<\/th>\r\n<\/tr>\r\n<\/tbody>\r\n" + 
			"<\/table>\r\n<h4\r\n  style=\"Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:24px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left;word-wrap:normal\">\r\n Pick up information<\/h4>\r\n" + 
			"<table\r\n  style=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n <tbody>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">" + 
			"\r\nZip Code<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + data.pickup_zip + "<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"Any Stairs?<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + (data.pickup_stairs ==true ? "yes" : "no") +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"Use of Elevator<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + (data.pickup_elevator ==true ? "yes" : "no") +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"<h4\r\nstyle=\"Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:24px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left;word-wrap:normal\">\r\nDelivery information<\/h4>\r\n<table\r\nstyle=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"Zip Code<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + data.delivery_zip +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">" + 
			"\r\nAny Stairs?<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n"+ (data.delivery_stairs == true ? "yes" : "no") +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"Use of Elevator<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n"+ (data.delivery_elevator == true ? "yes" : "no") +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"<h4\r\nstyle=\"Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:24px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left;word-wrap:normal\">\r\nPiano information<\/h4>\r\n<table\r\nstyle=\"border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%\">\r\n<tbody>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" +
			"Brand<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n"+ data.piano_brand +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"Model<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n"+ data.piano_model +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"Size<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n"+ data.piano_size +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n "  + 
			"Is it a player piano?<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n"+ data.piano_player +"<\/td>\r\n<\/tr>\r\n<tr\r\nstyle=\"padding:0;text-align:left;vertical-align:top\">\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n" + 
			"Additional Information<\/td>\r\n<td\r\nstyle=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\r\n"+ data.piano_additional_info +"<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>" + 
			"\r\n<\/th>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n<\/th>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>\r\n<\/center>\r\n<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>" + 
			"<center><a href='mailto:" + data.email + "?subject=Replying about your inquiry with Santana Piano Movers' style='display: block; padding: 30px; width: 300px;background-color: #19160f; border: 1px solid #000;color: #fff;text-decoration: none;font-size: 19px;'> Reply to " + data.customer +  "'s request.</a></center>"
			
}
]
})
.then(function(_r) {
   console.log(_r)
   res.status(200).send(_r);
 })
 .catch(function(err) {
   console.log(err)
   res.status(200).send(err);
 });


}

