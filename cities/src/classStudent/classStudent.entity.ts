import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { ClassEntity } from "src/class/class.entity";

@Entity('classStudent')
export class ClassStudentEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
        comment: 'ClassStudent table identifier'
    })
    id: number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.classesStudent,
    )
    user: number | UsuarioEntity;

    @ManyToOne(
        type => ClassEntity,
        classO => classO.students,
    )
    class: number | ClassEntity;
}