import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { BaseEntityColumns } from "../bases/BaseEntityColumns"
import { Jogadores } from "./Jogadores";
import { Produtos } from "./Produtos";

export enum Status {
    APROVADO = 'A',
    PENDENTE = 'P',
    CANCELADO = 'C',
  }

@Entity()
export class Pedidos extends BaseEntityColumns {

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    valor: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    taxa: number;

    @Column({ type: 'enum', enum: Status, default: Status.PENDENTE, })
    status: Status;

    @ManyToOne(type => Jogadores)
    @JoinColumn({name: 'jogador_id'})
    jogador: Jogadores;

    @OneToOne(() => Produtos)
    @JoinColumn()
    produto: Produtos
}
