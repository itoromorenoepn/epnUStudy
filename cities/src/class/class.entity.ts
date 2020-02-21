import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { CityEntity } from "src/city/city.entity";
//import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('class')
export class ClassEntity {
    @PrimaryGeneratedColumn({
        unsigned: true, // Sin negativos
        name: 'idClass',
    })
    id: number;

    @Index('street')
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        name: 'street',
    })
    street: string;

    @Index('subject')
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        name: 'subject',
    })
    subject: string;

    @Index('schedule')
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        name: 'schedule',
    })
    schedule: string;
       
}