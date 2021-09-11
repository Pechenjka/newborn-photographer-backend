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
  subject: `Сообщение от посетителя сайта name: ${name}, tel: ${tel}, email: ${email}`,
  text: `${text}`,
});

// Сообщение о заказе
const sendDataOrderUser = (name, email, tel, text, type, price, title, location) => transporter.sendMail({
  from: email,
  to: 'lobachev32@mail.ru',
  subject: `Хочу заказать фотосессию: Меня зовут: ${name}`,
  text: `Тип: ${type}, пакет: ${title}, стоимость: ${price}, кол-во образов ${location}. Мои контактные данные: tel: ${tel}, email: ${email}, сообщение: ${text}`,
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
    name, email, tel, text, type, price, title, location,
  } = req.body;
  sendDataOrderUser(name, email, tel, text, type, price, title, location)
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
