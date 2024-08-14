import { Entity, Column } from "typeorm"
import { BaseEntityColumns } from "../bases/BaseEntityColumns"

@Entity()
export class Produtos extends BaseEntityColumns {

    @Column()
    titulo: string;

    @Column()
    servidor: string;

    @Column()
    duracao: number;

}
