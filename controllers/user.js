const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: 'info.newborn.lobacheva@gmail.com',
    pass: 'newborn1987',
  },
  tls: { rejectUnauthorized: false },
});

//Подписка пользователя на рассылку
const sendMailNewsLetter = (email) => transporter.sendMail({
  from: email,
  to: 'lobachev32@mail.ru',
  subject: 'Подписаться на рассылку акций и будущих проектов',
  text: `Хочу подписаться на рассылку: ${email}`,
});

//Сообщение от посетителя сайта
const sendMailGetInTouch = (name, email, tel, text) => transporter.sendMail({
  from: email,
  to: 'lobachev32@mail.ru',
  subject: `Сообщение от посетителя сайта name: ${name}, tel: ${tel}, email: ${email}`,
  text: `${text}`,
});

//Сообщение о заказе
const sendDataOrderUser = (name, email, tel, text, type, price, title, location) => transporter.sendMail({
  from: email,
  to: 'lobachev32@mail.ru',
  subject: `Хочу заказать фотосессию: Меня зовут: ${name}`,
  text: `Тип: ${type}, пакет: ${title}, стоимость: ${price}, кол-во образов ${location}. Мои контактные данные: tel: ${tel}, email: ${email}, сообщение: ${text}`,
});


const getNewsLetter = (req, res) => {
  const { email } = req.body;
  sendMailNewsLetter(email)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

const getInTouch = (req, res) => {
  const {
    name, email, tel, text,
  } = req.body;
  sendMailGetInTouch(name, email, tel, text)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

const getOrder = (req, res) => {
  const {
    name, email, tel, text, type, price, title, location,
  } = req.body;
  sendDataOrderUser(name, email, tel, text, type, price, title, location)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

module.exports = { getNewsLetter, getInTouch, getOrder };
