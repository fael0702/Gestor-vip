import { Entity, Column, OneToMany } from "typeorm"
import { BaseEntityColumns } from "../bases/BaseEntityColumns"
import { TokenInvalido } from "./TokenInvalido";

@Entity()
export class Usuario extends BaseEntityColumns {

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    senha: string;

    @Column('date', { nullable: true })
    data_nascimento: Date;

    @OneToMany(type => TokenInvalido, type => type.usuario)
    tokens: TokenInvalido[];

}
