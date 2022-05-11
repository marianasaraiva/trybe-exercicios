// import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/user';

export default class UserModel {

  public getAll = async (): Promise<IUser[]> => {
    const query = 'SELECT * FROM TypeScriptExpress.Users'
    const [allUsers] = await connection.execute(query);

    return allUsers as IUser[];
  }
}