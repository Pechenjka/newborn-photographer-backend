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

module.exports = {
  UNAUTHORIZED_MESSAGE, DEFAULT_ERROR_SERVER_MESSAGE, NOT_FOUND_MESSAGE, BAD_REQUEST_MESSAGE, FILE_NAME_REQUEST_LOGGER, FILE_NAME_ERROR_LOGGER,
};
