import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { UserRoleEntity } from 'src/user-role/user-role.entity';

@Entity('web_user')
export class UserEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'userId',
        comment: 'User Table Identifier',
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
            comment: 'User full name',
        })
    name?: string;

    @Index({
        unique: false,
    })
    @Column(
        {
            type: 'varchar',
            name: 'email',
            nullable: true,
            comment: 'User mail address',
        })
    email?: string;

    @Index({
        unique: false,
    })
    @Column(
        {
            type: 'varchar',
            name: 'phone',
            nullable: true,
            comment: 'User phone',
        })
    phone?: string;

    @Index({
        unique: true,
    })
    @Column(
        {
            type: 'varchar',
            name: 'icNumber',
            nullable: false,
            comment: 'User identification card number',
        })
    icNumber: string;

    @Index({
        unique: true,
    })
    @Column(
        {
            type: 'varchar',
            name: 'username',
            nullable: false,
            comment: 'User username',
        })
    username: string;
    
    @OneToMany(type => UserRoleEntity, userRoles => userRoles.user)
    userRoles: UserRoleEntity[];
}