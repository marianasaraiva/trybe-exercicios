import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/user';

export default class UserModel {

  public getAll = async (): Promise<IUser[]> => {
    const query = 'SELECT id, name, email FROM TypeScriptExpress.Users'
    const [allUsers] = await connection.execute(query);

    return allUsers as IUser[];
  }

  public getById = async (id: number): Promise<IUser> => {
    const query = 'SELECT * FROM TypeScriptExpress.Users WHERE id=?';
    const [result] = await connection.execute(query, [id]);
    const [userById] = result as IUser[];
    return userById;
  }

  public create = async (user: IUser): Promise<IUser>=> {
    const { name, email, password } = user;
    const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?);';
    const createUser = await connection.execute<ResultSetHeader>(query, [name, email, password]);
    const [data] = createUser;
    const { insertId } = data;
    return {id: insertId, ...user};
  }

  public update = async (id: number, user: IUser): Promise<void> => {
    const { name, email, password } = user;
    const query = 'UPDATE TypeScriptExpress.Users SET name=?, email=?, password=? WHERE id=?'
    await connection.execute(query, [name, email, password, id]);
  }

  public deleteById = async (id: number): Promise<void> => {
    const query = 'DELETE FROM TypeScriptExpress.Users WHERE id=?'
    await connection.execute(query, [id]);
  }
}