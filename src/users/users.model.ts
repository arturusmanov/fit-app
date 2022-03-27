import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { LevelPhysicalActivity, Sex, TargetWeightType } from '../@types/users';
import { BodyParams } from './bodyParams.model';
import { HistoryWeightNodel } from './historyWeight.nodel';
import { AllergicFoodModel } from './allergicFoods.model';
import { ProgressPhotoModel } from './progressPhoto.model';

@Table({ tableName: 'users' })
export class UserInfoModel extends Model<UserInfoModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  /**
   * Имя пользователя
   */
  @Column({ type: DataType.STRING })
  name: string;

  /**
   * Номер телефона
   */
  @Column({ type: DataType.INTEGER, unique: true })
  phone: number;

  /**
   * Норма потребления калорий
   */
  @Column({ type: DataType.INTEGER })
  calories: number;

  /**
   * Пол
   */
  @Column({ type: DataType.STRING })
  sex: Sex;

  /**
   * Возраст
   */
  @Column({ type: DataType.INTEGER })
  age: number;

  /**
   * Рост
   */
  @Column({ type: DataType.INTEGER })
  growth: number;

  /**
   * Желаемый вес
   */
  @Column({ type: DataType.INTEGER })
  targetWeight: number;

  /**
   * Цель веса
   */
  @Column({ type: DataType.STRING })
  targetWeightType: TargetWeightType;

  /**
   * url автарки
   */
  @Column({ type: DataType.STRING })
  avatarUrl: string;

  /**
   * Фотографии прогресса
   */
  @HasMany(() => ProgressPhotoModel)
  progressUrls: ProgressPhotoModel;

  /**
   * Уровень физической активности
   */
  @Column({ type: DataType.STRING })
  levelPhysicalActivity: LevelPhysicalActivity;

  /**
   * Параметры тела пользовотеля
   * На каждого пользователя должна быть 1 запись, которая должна редактироваться
   */
  @HasOne(() => BodyParams)
  BodyParams: BodyParams;

  /**
   * История веса пользователя
   * На каждого пользователя должно быть сколько угодно записей или 0
   */
  @HasMany(() => HistoryWeightNodel)
  historyWeight: HistoryWeightNodel;

  /**
   * Продукты на которые есть аллергия
   */
  @BelongsToMany(() => UserInfoModel, () => AllergicFoodModel)
  allergicFoods: AllergicFoodModel;
}
