"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
const route = (0, express_1.Router)();
const controller = new user_1.default();
route.get('/', controller.getAll);
route.post('/', controller.create);
exports.default = route;
