console.log("ok");

var speakeasy = require('speakeasy');

var secret = speakeasy.generateSecret({length: 20});
console.log(secret.base32); 
//NAXGQTT2OVPDC4KKLIQS6PR4OI4XESDW //store somewhere we use in app.js

var QRCode = require('qrcode');

QRCode.toDataURL(secret.otpauth_url, function(err, image_data) {
  console.log(image_data); // A data URI for the QR code image
});


//ref https://davidwalsh.name/2fa
//ref git https://github.com/speakeasyjs/speakeasy