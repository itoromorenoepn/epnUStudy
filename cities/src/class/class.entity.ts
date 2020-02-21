import { PrimaryGeneratedColumn, Index, Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AddressEntity } from "src/address/address.entity";
import { TeacherAssingmentEntity } from "src/teacherAssingment/teacherAssigment.entity";
import { AssignmentEntity } from "src/assingment/assingment.entity";
import { ClassStudentEntity } from "src/classStudent/classStudent.entity";

@Entity('class')
export class ClassEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
        comment: 'Class table identifier'
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'date',
        nullable: false,
        name: 'date',
        comment: 'Class date'
    })
    date: string;
    
    @Index({
        unique: false,
    })
    @Column({
        type: 'float',
        nullable: false,
        name: 'price',
        comment: 'Class price'
    })
    price: number;

    @ManyToOne(
        type => AddressEntity,
        address => address.classes,
        {

        },
    )
    address: number | AddressEntity;

    @ManyToOne(
        type => TeacherAssingmentEntity,
        teacher => teacher.classes,
    )
    teacher: number | TeacherAssingmentEntity;

    @ManyToOne(
        type => AssignmentEntity,
        assingment => assingment.classes,
    )
    assingment: number | AssignmentEntity;

    @OneToMany(
        type => ClassStudentEntity,
        classStudentEntity => classStudentEntity.class,
    )
    students: ClassStudentEntity[];

}