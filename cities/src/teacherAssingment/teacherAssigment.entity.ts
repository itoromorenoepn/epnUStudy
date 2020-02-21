import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { AssingmentEntity } from "src/assingment/assingment.entity";
import { ClassEntity } from "src/class/class.entity";

@Entity('teacherAssingment')
export class TeacherAssingmentEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
        comment: 'Teacher assingment table identifier'
    })
    id: number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.assingments,
    )
    user: number | UsuarioEntity;

    @ManyToOne(
        type => AssingmentEntity,
        assingment => assingment.assingments,
    )
    assingment: number | AssingmentEntity;

    @OneToMany(
        type => ClassEntity,
        classO => classO.teacher,
        {

        },
    )
    classes: number | ClassEntity[];

}