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
const user_1 = __importDefault(require("../services/user"));
class UserController {
    constructor() {
        this.service = new user_1.default();
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.service.getAll();
            return res.status(200).json(allUsers);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const userById = yield this.service.getById(id);
            if (!userById) {
                return res.status(404).json({ message: 'User not found!' });
            }
            return res.status(200).json(userById);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const userCreated = yield this.service.create(user);
            return res.status(200).json(userCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const user = req.body;
            yield this.service.update(id, user);
            return res.status(201).end();
        });
        this.deleteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            yield this.service.deleteById(id);
            return res.status(200).json({ message: 'User deleted successfully' });
        });
    }
}
exports.default = UserController;
