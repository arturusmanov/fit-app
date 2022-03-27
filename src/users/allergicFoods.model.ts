import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users-allergic-foods' })
export class AllergicFoodModel extends Model<AllergicFoodModel> {
  /**
   * Идентификатор аллергического продукта
   */
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true })
  id: number;

  /**
   * Название аллергического продукта
   */
  @Column({ type: DataType.INTEGER, allowNull: false })
  title: string;
}
