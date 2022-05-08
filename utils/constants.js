const UNAUTHORIZED_MESSAGE = 'Необходимо обновить авторизацию или заново авторизоваться';
const DEFAULT_ERROR_SERVER_MESSAGE = 'На сервере произошла ошибка';
const NOT_FOUND_MESSAGE = {
  NOT_FOUND_BACKET: 'Бакет не найден',
  RESOURSE_ERROR: 'Запрошенный ресурс не найден',
};
const BAD_REQUEST_MESSAGE = {
  EMPTY_FIELD: 'Поле email заполнено неправильно',
  INCORRECT_REQUEST: 'Некорректный запрос',
};

const FILE_NAME_REQUEST_LOGGER = 'logs/request.log';
const FILE_NAME_ERROR_LOGGER = 'logs/error.log';

const PACKET_SCHEMA_VALIDATION_MESSAGE = {
  TITLE: 'Поле "title" должно быть заполнено',
  PRICE: 'Поле "price" должно быть заполнено',
  PACKET: 'Поле "packet" должно быть заполнено',
  PACKETID: 'Поле "packetId" должно быть заполнено',
  DESCRIPTION: 'Поле "description" должно быть заполнено',
  SHORTDESCRIPTION: 'Поле "shortDescription" должно быть заполнено',
  DURATION: 'Поле "duration" должно быть заполнено',
  IMAGE: 'Поле "image" должно быть заполнено',
  IMAGEDESCRIPTION: 'Поле "imageDescription" должно быть заполнено',
  NUMBERLOCATION: 'Поле "numberLocations" должно быть заполнено',
};
const PACKETS_SCHEMA_VALIDATION_MESSAGE = {
  TITLE: 'Поле "title" должно быть заполнено',
  id: 'Поле "packetsId" должно быть заполнено',

};

module.exports = {
  PACKETS_SCHEMA_VALIDATION_MESSAGE, PACKET_SCHEMA_VALIDATION_MESSAGE, UNAUTHORIZED_MESSAGE, DEFAULT_ERROR_SERVER_MESSAGE, NOT_FOUND_MESSAGE, BAD_REQUEST_MESSAGE, FILE_NAME_REQUEST_LOGGER, FILE_NAME_ERROR_LOGGER,
};
