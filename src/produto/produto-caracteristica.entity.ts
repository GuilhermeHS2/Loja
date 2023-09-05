import { Entity, Column } from "typeorm";

@Entity('produto_caracteristica')
export class ProdutoCaracteristica {
    @Column({name: 'nome', length: 100, nullable: false})
    nome: string;

    @Column({name: 'descricao', length: 255, nullable: false})
    descricao: string;
}