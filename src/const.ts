const enum AppRoute {
  Main = '/',
  Contacts = '/contacts',
  Quest = '/detailed-quest/:id',
  New = '/new',
  Reviews  = '/reviews ',
  Action = '/action',
}

const enum APIRoute {
  Quests = '/quests',
  Quest = '/quests/',
  Orders = '/orders',
}

const enum DifficultylevelType {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

enum QuestType {
  All = 'all',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  Adventures = 'adventures',
  SciFi = 'sci-fi',
}

const DifficultylevelToReadable = {
  [DifficultylevelType.Easy]: 'легкий',
  [DifficultylevelType.Medium]: 'средний',
  [DifficultylevelType.Hard]: 'сложный'
}

const QuestTypeToReadable = {
  [QuestType.All]: '',
  [QuestType.Horror]: 'ужасы',
  [QuestType.Mystic]: 'мистика',
  [QuestType.Detective]: 'детектив',
  [QuestType.Adventures]: 'приключение',
  [QuestType.SciFi]: 'sci-fi',
}

const enum NameBookingInputs {
  Name = 'booking-name',
  Phone = 'booking-phone',
  People = 'booking-people',
  Legal = 'booking-legal',
}

const BOOKING_ERROR_PHONE = 'Телефонный номер должен содержать 10 цифр.'
const BOOKING_ERROR_PEOPLE = 'Количество гостей должно быть больше нуля.'

const enum PageName {
  New = 'НОВИЧКАМ',
  Action = 'АКЦИИ',
  Reviews = 'ОТЗЫВЫ'
}

export {
  AppRoute,
  APIRoute,
  DifficultylevelType,
  DifficultylevelToReadable,
  QuestType,
  QuestTypeToReadable,
  NameBookingInputs,
  BOOKING_ERROR_PHONE,
  BOOKING_ERROR_PEOPLE,
  PageName
};
