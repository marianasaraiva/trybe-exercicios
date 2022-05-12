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
const connection_1 = __importDefault(require("./connection"));
class UserModel {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT id, name, email FROM TypeScriptExpress.Users';
            const [allUsers] = yield connection_1.default.execute(query);
            return allUsers;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM TypeScriptExpress.Users WHERE id=?';
            const [result] = yield connection_1.default.execute(query, [id]);
            const [userById] = result;
            return userById;
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?);';
            const createUser = yield connection_1.default.execute(query, [name, email, password]);
            const [data] = createUser;
            const { insertId } = data;
            return Object.assign({ id: insertId }, user);
        });
        this.update = (id, user) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const query = 'UPDATE TypeScriptExpress.Users SET name=?, email=?, password=? WHERE id=?';
            yield connection_1.default.execute(query, [name, email, password, id]);
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const query = 'DELETE FROM TypeScriptExpress.Users WHERE id=?';
            yield connection_1.default.execute(query, [id]);
        });
    }
}
exports.default = UserModel;
