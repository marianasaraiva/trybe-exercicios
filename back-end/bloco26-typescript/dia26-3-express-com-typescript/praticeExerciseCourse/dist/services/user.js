"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserService {
    constructor() {
        // instancia de uma classe
        this.model = new user_1.default();
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.model.getAll();
            return allUsers;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const userById = yield this.model.getById(id);
            return userById;
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const createUser = yield this.model.create(user);
            return createUser;
        });
        this.update = (id, user) => __awaiter(this, void 0, void 0, function* () {
            const userById = yield this.model.getById(id);
            // if (!userById) {
            //   throw new Error;
            // }
            yield this.model.update(id, user);
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const UserId = yield this.model.getById(id);
            // if (!UserId) {
            //   throw new Error;
            // }
            yield this.model.deleteById(id);
        });
    }
}
exports.default = UserService;
