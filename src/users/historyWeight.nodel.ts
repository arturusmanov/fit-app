import { Column, DataType, Model, Table } from 'sequelize-typescript';

Table({ tableName: 'users-history-weight' });
export class HistoryWeightNodel extends Model<HistoryWeightNodel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  weight: number;
}