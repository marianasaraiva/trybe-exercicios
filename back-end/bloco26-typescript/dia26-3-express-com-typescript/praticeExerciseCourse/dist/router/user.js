"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
const route = (0, express_1.Router)();
const user = new user_1.default();
route.get('/', user.getAll);
route.post('/', user.create);
route.get('/:id', user.getById);
route.put('/:id', user.update);
route.delete('/:id', user.deleteById);
exports.default = route;
