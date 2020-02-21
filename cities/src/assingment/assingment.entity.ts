import { Entity, PrimaryGeneratedColumn, Index, Column, OneToMany } from "typeorm";
import { TeacherAssingmentEntity } from "src/teacherAssingment/teacherAssigment.entity";
import { ClassEntity } from "src/class/class.entity";

@Entity('assingment')
export class AssingmentEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
        comment: 'Assingment table identifier'
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'name',
        comment: 'Assingment name'
    })
    name: string;

    @OneToMany(
        type => TeacherAssingmentEntity,
        teacherAssingmentEntity => teacherAssingmentEntity.assingment,
        {

        },
    )
    assingments: number | TeacherAssingmentEntity[];

    @OneToMany(
        type => ClassEntity,
        classO => classO.assingment,
        {

        },
    )
    classes: ClassEntity[]; 

}