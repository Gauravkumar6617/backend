const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // Use 'sandbox' for testing
  client_id: "AThRIwjwkThXHCPFg_jabfEznKLUTJQiMwxmtwr2A1RFCRPm6A3bOuX13Qsy3PBCDdbci5i-GI_LAj_Q", // Replace with your sandbox client ID
  client_secret: "EICh-gOwMr52qwhPrzkoq4mG1nzXMgL9SaoeWkC0BmxMUv5pqEPrPbf3oNkH0eJZWA7SqWM_ofJ40yPe" // Replace with your sandbox client secret
});

module.exports = paypal;