'use strict';

class User {
  constructor(id, uri){
    this.id = id
    this.uri = uri
  }
}

class Guide {
  constructor(id, chapter_id, title, description, 
    complited_by_user, curent_step) {
    this.id = id
    this.chapter_id = chapter_id
    this.description = description
    this.recommended_guides_id = recommended_guides_id
    this.complited_by_user = complited_by_user
    this.curent_step = curent_step
  }
}

class Step {
  constructor(id, guide_id, content){
    this.id = id
    this.guide_id = guide_id
    this.content = content
  }
}

var Users = [
  new User(1, 's88VKH!SS60s'),
  new User(2, '0x5L&8Pp1JIO'),
  new User(3, 'kslFr*t904H1'),
  new User(4, 'vV%yd7#77736'),
  new User(5, 'KEw4u35$4gWU'),
  new User(6, '2O8g*P0u3M9C'),
  new User(7, 'J240*sQ3tIX@'),
  new User(8, '@S!2s9U7T7Tc'),
  new User(9, '6li1Yq4Y1&a$'),
  new User(10, 'bZ8lJ&22W5$6'),
]

var Chapters = [
  'Регистрация',
  "Верификация",
  "Главная страница",
  "Мероприятия",
  "Мои проекты",
  "Архив проектов",
  "Мои заявки",
  "Грантовые соглашения",
  "Отчёты"
]

var Guides = [
  new Guide(0, 0, "С использованием сервисов", "В этом уроке вам раскажут как зарегистрироваться с использованием сторонних сервисов", [], false, 0),
  new Guide(1, 0, "С помощью логина и пароля", "В этом уроке рассмотрим все поля формы регистрации и правила их заполнения", [], false, 0),

  new Guide(0, 1, "Верификация", "В этом уроке расскажим как правильно пройти верификацию", [], false, 0),

  new Guide(0, 2, "Обзор интерфейса", "В этом уроке покажем основные вкладки и их содержание", [], false, 0),
  new Guide(1, 2, "Интерактивная карта", "В этом уроке покажем как с помощью карты узнать информацию об органах реализующих молодёжную политику", [], false, 0),
  
  new Guide(0, 3, "Фильтр мероприятий", "В этом уроке покажем как применять фильтры для поиска мероприятий", [], false, 0),
  new Guide(1, 3, "Карточки мероприятий", "В этом уроке покажим содержание карточек мероприятий", [], false, 0),

  new Guide(0, 4, "Обзор проектов", "В этом уроке покажем как правильно управлять вашими проектами", [], false, 0),
  new Guide(1, 4, "Фильтр проектов", "В этом уроке покажем как применять фильтры для поиска ваших проектов", [], false, 0),
  new Guide(2, 4, "Добавить проект", "В этом уроке покажем как создать новый проект и какой шаблон выбрать", [], false, 0),
  
  new Guide(0, 5, "Обзор архивных проектов", "В этом уроке покажем как правильно управлять вашими архивными проектами", [], false, 0),
  new Guide(1, 5, "Фильтр архивных проектов", "В этом уроке покажем как применять фильтры для поиска ваших проектов в архиве", [], false, 0),
  new Guide(2, 5, "Добавить проект???", "В этом уроке покажем как создать новый проект и какой шаблон выбрать", [], false, 0),

  new Guide(0, 6, "Статусы гранта", "В этом уроке покажем как узнать статус ваших заявок на гранты", [], false, 0),
  new Guide(1, 6, "Статусы мероприятия", "В этом уроке покажем как узнать статус ваших заявок мероприятия", [], false, 0),

  new Guide(0, 7, "Как подписывать грантовые соглашения", "В этом уроке раскажем как подписываются грантовые соглашения", [], false, 0),

  new Guide(0, 8, "Оформление отчётности", "В этом уроке покажем как составляется отчётность по вашему проекту", [], false, 0),
  new Guide(1, 8, "Отправка отчётности", "В этом уроке покажем как отправлять отчётность по вашему проекту", [], false, 0),
]

var Steps =
[
  new Step(0, 0, '{description: "На выбор вам предоставлены сервисы Добро.ру, госуслуги, ВКонтакте"}, look_at: "#"')
  new Step(1, 0, 'description: "Авторизуйтес с использованием одной из них"')
  new Step(2, 0, "О порядке заполнения остальных полей вы сможете узнать в следующей интсрукции")

  new Step(0, 1, "Форма регистрации поделена на 3 шага")
]

/**
 * return file with uri
 *
 * file_uri String 
 * returns byte[]
 **/
exports.fileFile_uriGET = function(file_uri) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['binary'] = "MTAxMV8wMTAwIDAxMTFfMTAxMA==";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * return guide info
 *
 * guide_id Integer 
 * user_id Integer 
 * returns guide
 **/
exports.guideGuide_idGET = function(guide_id,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "recommended_guides_id" : [ 1, 1 ],
  "curent_step" : 5,
  "complited_by_user" : true,
  "description" : "description",
  "id" : 0,
  "chapter_id" : 6,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * edit guide progress
 *
 * guide_id Integer 
 * replace_curent_step Integer  (optional)
 * complit_steps List  (optional)
 * no response value expected for this operation
 **/
exports.guideGuide_idPUT = function(guide_id,replace_curent_step,complit_steps) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * return guide steps
 *
 * guide_id Integer 
 * user_id Integer 
 * returns List
 **/
exports.guideGuide_idStepsGET = function(guide_id,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "section_id" : 6,
  "complited" : true,
  "id" : 0,
  "content" : "content"
}, {
  "section_id" : 6,
  "complited" : true,
  "id" : 0,
  "content" : "content"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * return user guides list
 *
 * user_ID Integer 
 * returns List
 **/
exports.guidesGET = function(user_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "recommended_guides_id" : [ 1, 1 ],
  "curent_step" : 5,
  "complited_by_user" : true,
  "description" : "description",
  "id" : 0,
  "chapter_id" : 6,
  "title" : "title"
}, {
  "recommended_guides_id" : [ 1, 1 ],
  "curent_step" : 5,
  "complited_by_user" : true,
  "description" : "description",
  "id" : 0,
  "chapter_id" : 6,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * return general guides list
 *
 * returns List
 **/
exports.guidesGeneralGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "recommended_guides_id" : [ 1, 1 ],
  "curent_step" : 5,
  "complited_by_user" : true,
  "description" : "description",
  "id" : 0,
  "chapter_id" : 6,
  "title" : "title"
}, {
  "recommended_guides_id" : [ 1, 1 ],
  "curent_step" : 5,
  "complited_by_user" : true,
  "description" : "description",
  "id" : 0,
  "chapter_id" : 6,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * search user with uri
 *
 * user_uri String 
 * returns Integer
 **/
exports.userGET = function(user_uri) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register new user in system, throw exeption if uri is registered
 *
 * user_uri String 
 * returns Integer
 **/
exports.userPOST = function(user_uri) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit user data
 *
 * user_ID Integer 
 * replace_uri String  (optional)
 * no response value expected for this operation
 **/
exports.userPUT = function(user_ID,replace_uri) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

