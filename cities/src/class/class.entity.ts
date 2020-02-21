import { PrimaryGeneratedColumn, Index, Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { TeacherAssingmentEntity } from "src/teacherAssingment/teacherAssigment.entity";
import { AssingmentEntity } from "src/assingment/assingment.entity";
import { ClassStudentEntity } from "src/classStudent/classStudent.entity";
import { SectorEntity } from "src/sector/sector.entity";

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
        type => SectorEntity,
        sector => sector.classes,
        {

        },
    )
    sector: number | SectorEntity;

    @ManyToOne(
        type => TeacherAssingmentEntity,
        teacher => teacher.classes,
    )
    teacher: number | TeacherAssingmentEntity;

    @ManyToOne(
        type => AssingmentEntity,
        assingment => assingment.classes,
    )
    assingment: number | AssingmentEntity;

    @OneToMany(
        type => ClassStudentEntity,
        classStudentEntity => classStudentEntity.class,
    )
    students: ClassStudentEntity[];

}