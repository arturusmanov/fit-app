import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { AuthUserRequestData } from '../@types/auth';

@Table({ tableName: 'user-auth' })
export class AuthUserModel extends Model<AuthUserModel, AuthUserRequestData> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  email: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  phone: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  code: number;
}
