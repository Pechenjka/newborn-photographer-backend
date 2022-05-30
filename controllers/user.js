const nodemailer = require('nodemailer');
const { BadRequest } = require('../errors/index');
const { BAD_REQUEST_MESSAGE } = require('../utils/constants');
const { EMAIL_ACCOUNT, PASSWORD_EMAIL_ACCOUNT } = require('../config');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  ignoreTLS: false,
  secure: false,
  auth: {
    user: EMAIL_ACCOUNT,
    pass: PASSWORD_EMAIL_ACCOUNT,
  },
});

// Подписка пользователя на рассылку
const sendMailNewsLetter = (email) => transporter.sendMail({
  from: email,
  to: 'lobachev32@mail.ru',
  subject: 'Посетитель сайта желает подписаться на рассылку акций и будущих проектов',
  text: `Хочу подписаться на рассылку: ${email}`,
});

// Сообщение от посетителя сайта
const sendMailGetInTouch = (name, email, tel, text) => transporter.sendMail({
  from: email,
  to: 'lobachev32@mail.ru',
  subject: `Сообщение от посетителя сайта name: ${name}, ${tel === undefined ? 'tel: поле не заполнено' : `tel: ${tel}`}, email: ${email}`,
  text: `${text}`,
});

const output = (name, email, tel, text, packets) => (
  `<div>
      <h3>Детали заказа</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${tel}</li>
      </ul>
      <h3>Сообщение</h3>
      <p>${text}</p>
      <table style="font-size: 12px">
        <thead>
          <tr style="background-color: grey; color: white">
            <th style="padding: 5px 10px">Пакет</th>
            <th style="padding: 5px 10px">Название</th>
            <th style="padding: 5px 10px">Категория</th>
            <th style="padding: 5px 10px">Цена</th>
          </tr>
        </thead>
        <tbody>
         ${packets.map((packet) => (
    `<tr>
                <th>
                  <img style="width: 100px" src=${packet.image}  alt="image from paket" />
                </th>
                <th>${packet.title}</th>
                <th>${packet.packet}</th>
                <th>${packet.price}</th>
              </tr>`
  ))}
        </tbody>
      </table>
    </div>
  `);

const sendDataOrderUser = (name, email, tel, text, packets) => transporter.sendMail({
  from: `"Nodemailer Contact" ${EMAIL_ACCOUNT}`,
  to: 'lobachev32@mail.ru',
  subject: 'Получен новый запрос на фотосессию',
  html: output(name, email, tel, text, packets),
});

const getNewsLetter = (req, res, next) => {
  const { email } = req.body;
  sendMailNewsLetter(email)
    .then((data) => {
      if (data.envelope.from === '') {
        throw new BadRequest(BAD_REQUEST_MESSAGE.EMPTY_FIELD);
      }
      if (!data.response.includes('OK')) {
        throw new BadRequest(BAD_REQUEST_MESSAGE.INCORRECT_REQUEST);
      }
      return res.status(200).send(data);
    })
    .catch(next);
};

const getInTouch = (req, res, next) => {
  const {
    name, email, tel, text,
  } = req.body;
  sendMailGetInTouch(name, email, tel, text)
    .then((data) => {
      if (data.envelope.from === '') {
        throw new BadRequest(BAD_REQUEST_MESSAGE.EMPTY_FIELD);
      }
      if (!data.response.includes('OK')) {
        throw new BadRequest(BAD_REQUEST_MESSAGE.INCORRECT_REQUEST);
      }
      return res.status(200).send(data);
    })
    .catch(next);
};

const getOrder = (req, res, next) => {
  const {
    name, email, tel, text, packets,
  } = req.body;
  sendDataOrderUser(name, email, tel, text, packets)
    .then((data) => {
      if (data.envelope.from === '') {
        throw new BadRequest(BAD_REQUEST_MESSAGE.EMPTY_FIELD);
      }
      if (!data.response.includes('OK')) {
        throw new BadRequest(BAD_REQUEST_MESSAGE.INCORRECT_REQUEST);
      }
      return res.status(200).send(data);
    })
    .catch(next);
};

module.exports = { getNewsLetter, getInTouch, getOrder };
