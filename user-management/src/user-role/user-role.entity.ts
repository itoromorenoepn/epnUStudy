import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Entity('web_user_role')
export class UserRoleEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'userRoleId',
        comment: 'User Role Table Identifier',
    })
    id: number;
    @Index({
        unique: false,
    })
    @Column(
        {
            type: 'varchar',
            name: 'name',
            nullable: true,
            comment: 'Role name',
        })
    name?: string;

    @ManyToOne(type => UserEntity, user => user.userRoles)
    user: UserEntity;
}