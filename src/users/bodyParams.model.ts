import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users-body-params' })
export class BodyParams extends Model<BodyParams> {
  /**
   * Идентификатор пользователя
   */
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  userId: number;

  /**
   * Объем груди
   */
  @Column({ type: DataType.INTEGER, allowNull: false })
  chest: number;

  /**
   * Объем талии
   */
  @Column({ type: DataType.INTEGER, allowNull: false })
  waist: number;

  /**
   * Объем бедер
   */
  @Column({ type: DataType.INTEGER, allowNull: false })
  hips: number;
}
