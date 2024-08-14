import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import { BaseEntityColumns } from "../bases/BaseEntityColumns"
import { Usuario } from "./Usuario"

@Entity()
export class TokenInvalido extends BaseEntityColumns {

    @Column()
    token: string;

    @Column()
    exp: number;

    @ManyToOne(type => Usuario)
    @JoinColumn({name: 'usuario_id'})
    usuario: Usuario;

}
