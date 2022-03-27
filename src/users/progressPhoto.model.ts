import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users-photos-progress' })
export class ProgressPhotoModel extends Model<ProgressPhotoModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  photoUrl: string;

  @Column({ type: DataType.DATE, allowNull: false })
  date: Date;
}
