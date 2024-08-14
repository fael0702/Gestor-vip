import { Entity, Column, OneToMany } from "typeorm"
import { BaseEntityColumns } from "../bases/BaseEntityColumns"
import { Pedidos } from "./Pedidos";

@Entity()
export class Jogadores extends BaseEntityColumns {

    @Column()
    steam_id: string;

    @Column()
    nickname: string;

    @Column()
    email: string;

    @OneToMany(type => Pedidos, type => type.jogador)
    pedidos: Pedidos[];

}
