import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEntity } from 'src/role/role.entity';
import { TeacherAssingmentEntity } from 'src/teacherAssingment/teacherAssigment.entity';
import { ClassStudentEntity } from 'src/classStudent/classStudent.entity';

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
        comment: 'id de la tabla usuario',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column(
        {
            type: 'varchar',
            name: 'nombre',
            nullable: false,
            comment: 'Nombre del usuario',
        })
    nombre: string;

    @Index({
        unique: true,
    })
    @Column(
        {
            type: 'varchar',
            name: 'nombreUsuario',
            nullable: false,
            comment: 'Nombre de usuario del usuario',
        })
    nombreUsuario: string;

    @Index({
        unique: false,
    })
    @Column(
        {
            type: 'varchar',
            name: 'contrasena',
            nullable: false,
            comment: 'Contrasena del usuario',
        })
    contrasena: string;

    @Index({
        unique: true,
    })
    @Column(
        {
            type: 'varchar',
            name: 'cedula',
            nullable: false,
            comment: 'Cédula del usuario',
        })
    cedula: string;

    @OneToMany(
        type => RoleEntity,
        role => role.user,
        {

        },
    )
    roles: number | RoleEntity[];

    @OneToMany(
        type => TeacherAssingmentEntity,
        teacherAssingmentEntity => teacherAssingmentEntity.user,
        {

        },
    )
    assingments: number | TeacherAssingmentEntity[];

    @OneToMany(
        type => ClassStudentEntity,
        classStudent => classStudent.user,
        {

        },
    )
    classesStudent: number | TeacherAssingmentEntity[];

}