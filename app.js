// This is provided the by the user via form POST
var userToken = 562818;
console.log("ok");

var speakeasy = require('speakeasy');

// Load the secret.base32 from their user record in database
var secret = "NAXGQTT2OVPDC4KKLIQS6PR4OI4XESDW";

// Verify that the user token matches what it should at this moment
var verified = speakeasy.totp.verify({
  secret: secret,
  encoding: 'base32',
  token: userToken
});

console.log("Is I'm verified, ",verified)