import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserInfoModel } from './users.model';
import { AllergicFoodModel } from './allergicFoods.model';

@Table({ tableName: 'users-allergic-foods' })
export class UsersAllergicFood extends Model<UsersAllergicFood> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ForeignKey(() => UserInfoModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ForeignKey(() => AllergicFoodModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  allergicFoodId: number;
}
