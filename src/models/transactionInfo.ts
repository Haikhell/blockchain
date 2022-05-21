import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class TransactionInfo extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    autoIncrementIdentity: true,
    unique: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  hash!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  tokenContract!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  from!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  to!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  amount!: string;

  @Column({
    allowNull: false,
    type: DataType.DATE,
  })
  blockTimestamp!: Date;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}



