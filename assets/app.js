const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = 'AC2803bb59fcd4ccc26aad9cbd6f6eb3dd';
const authToken = '73349bf0360a29fbdbfd94d06365822e';
const twilioPhoneNumber = '+14703751469';

const client = twilio(accountSid, authToken);

app.post('/sms', (req, res) => {
  const phoneNumber = +6281527244957;
  const message = 'ada yanng mesan';

  client.messages
    .create({
      body: 'Pesan telah diterima',
      from: twilioPhoneNumber,
      to: phoneNumber,
    })
    .then((message) => {
      console.log(message.sid);
      res.status(200).send('Pesan telah dikirim.');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Gagal mengirim pesan.');
    });
});

app.listen(3000, () => {
  console.log('Aplikasi web menunggu pesan pada port 3000.');
});
