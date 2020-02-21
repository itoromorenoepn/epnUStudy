import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CityEntity } from "src/city/city.entity";
import { AddressEntity } from "src/address/address.entity";
//import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('sector')
export class SectorEntity {
    @PrimaryGeneratedColumn({
        unsigned: true, // Sin negativos
        name: 'id_sector',
    })
    id: number;

    @Index('sector_name')
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        name: 'sector_name',
    })
    name: string;


    @ManyToOne(
        type => CityEntity, // Entidad
        city => city.sectors, // El campo de la relacion
        {
            onDelete: 'CASCADE',
        },
    )
    city: number | CityEntity;

    @OneToMany(
        type => AddressEntity,
        address => address.sector,
        {

        },
    )
    addresses: AddressEntity[]; 

}