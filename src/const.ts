const enum AppRoute {
  Main = '/',
  Contacts = '/contacts',
  Quest = '/quest/:id',
}

const enum APIRoute {
  Quests = '/quests',
}

const enum DifficultylevelType {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

const DifficultylevelToReadable = {
  [DifficultylevelType.Easy]: 'легкий',
  [DifficultylevelType.Medium]: 'средний',
  [DifficultylevelType.Hard]: 'сложный'
}

export {
  AppRoute,
  APIRoute,
  DifficultylevelType,
  DifficultylevelToReadable
};
