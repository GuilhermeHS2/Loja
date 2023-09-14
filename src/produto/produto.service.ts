import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>
    ) {}
    async criaProduto(ProdutoEntity: ProdutoEntity){
        await this.produtoRepository.save(ProdutoEntity);
    }
}