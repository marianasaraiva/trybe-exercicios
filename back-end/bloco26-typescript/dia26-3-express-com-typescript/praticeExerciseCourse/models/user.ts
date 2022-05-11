import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/user';

export default class UserModel {

  public getAll = async (): Promise<IUser[]> => {
    const query = 'SELECT id, name, email FROM TypeScriptExpress.Users'
    const [allUsers] = await connection.execute(query);

    return allUsers as IUser[];
  }

  public create = async (user: IUser): Promise<IUser>=> {
    const { name, email, password } = user;
    const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?);';
    const createUser = await connection.execute<ResultSetHeader>(query, [name, email, password]);
    const [data] = createUser;
    const { insertId } = data;
    return {id: insertId, ...user};
  }
}