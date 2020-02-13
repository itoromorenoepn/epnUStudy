import {Column, Entity, Index, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { SectorEntity } from "src/sector/sector.entity";

@Entity('city')
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
        name: 'name_city',
        comment: 'City table Name'
    })
    name?: string;
    @OneToMany(
        type => SectorEntity, // Entidad
        sector => sector.city, // Nombre del campo
    )
    sectors: SectorEntity[];
}
