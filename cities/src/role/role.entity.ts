import { PrimaryGeneratedColumn, Index, Column, Entity, ManyToOne } from "typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";

@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
        comment: 'Role table identifier'
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'name',
        comment: 'Role name'
    })
    name: string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.roles,
    )
    user: number | UsuarioEntity;

}