import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'datetimeoffset',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetimeoffset',
  })
  updatedAt: Date;
}
