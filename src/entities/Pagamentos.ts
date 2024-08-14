import { Entity, Column } from "typeorm"
import { BaseEntityColumns } from "../bases/BaseEntityColumns"

@Entity()
export class Pagamentos extends BaseEntityColumns {

    @Column()
    titulo: string;

    @Column()
    link: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    valor: number;

}
