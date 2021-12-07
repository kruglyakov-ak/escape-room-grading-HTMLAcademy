const enum AppRoute {
  Main = '/',
  Contacts = '/contacts',
  Quest = '/detailed-quest/:id',
}

const enum APIRoute {
  Quests = '/quests',
  Quest = '/quests/',
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

export {
  AppRoute,
  APIRoute,
  DifficultylevelType,
  DifficultylevelToReadable,
  QuestType,
  QuestTypeToReadable
};
