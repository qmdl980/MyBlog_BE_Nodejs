import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class AdminInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    admin_id: string;

    @Column("text")
    admin_pw: string;
}