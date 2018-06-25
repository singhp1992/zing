import { Entity, PrimaryGeneratedColumn, Column  } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsNumberString } from 'class-validator'

@Entity()
export default class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    name: string

    @IsNumberString()
    @Column('text', {nullable: true })
    price: string  

    @Column('text', { nullable: false })
    description: string
}