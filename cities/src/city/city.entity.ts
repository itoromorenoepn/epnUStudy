import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario_web')
export class CityEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_city',
        comment: 'City table identifier'
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'namecity',
        comment: 'City table Name'
    })
    name?: string;
 /*
    @Index({
        unique: true,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'cedula',
        comment: 'Cedula de la tabla usuario'
    })
    cedula: string;
 */
}
