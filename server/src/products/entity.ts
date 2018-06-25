import { Entity, PrimaryGeneratedColumn, Column  } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    name: string

    @Column('text', { nullable: true })
    remarks: string
}