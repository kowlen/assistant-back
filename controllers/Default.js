'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.fileFile_uriGET = function fileFile_uriGET (req, res, next, file_uri) {
  Default.fileFile_uriGET(file_uri)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guideGuide_idGET = function guideGuide_idGET (req, res, next, guide_id, user_id) {
  Default.guideGuide_idGET(guide_id, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guideGuide_idPUT = function guideGuide_idPUT (req, res, next, guide_id, replace_curent_step, complit_steps) {
  Default.guideGuide_idPUT(guide_id, replace_curent_step, complit_steps)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guideGuide_idStepsGET = function guideGuide_idStepsGET (req, res, next, guide_id, user_id) {
  Default.guideGuide_idStepsGET(guide_id, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guidesGET = function guidesGET (req, res, next, user_ID) {
  Default.guidesGET(user_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guidesGeneralGET = function guidesGeneralGET (req, res, next) {
  Default.guidesGeneralGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGET = function userGET (req, res, next, user_uri) {
  Default.userGET(user_uri)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userPOST = function userPOST (req, res, next, user_uri) {
  Default.userPOST(user_uri)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userPUT = function userPUT (req, res, next, user_ID, replace_uri) {
  Default.userPUT(user_ID, replace_uri)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
