import { Entity, PrimaryGeneratedColumn, Index, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { SectorEntity } from "src/sector/sector.entity";
import { ClassEntity } from "src/class/class.entity";

@Entity('address')
export class AddressEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
        comment: 'Address table identifier'
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'address',
        comment: 'Address'
    })
    address: string;

    @ManyToOne(
        type => SectorEntity,
        sector => sector.addresses,
    )
    sector: number | SectorEntity;

    @OneToMany(
        type => ClassEntity,
        classO => classO.address,
        {

        },
    )
    classes: ClassEntity[]; 

}