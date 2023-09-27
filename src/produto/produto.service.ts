/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { ListaProdutoDTO } from "./dto/ListaProduto.dto";
import { AtualizaProdutoDTO } from "./dto/atualizaProduto.dto";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>
    ) {}
    async criaProduto(ProdutoEntity: ProdutoEntity){
        await this.produtoRepository.save(ProdutoEntity);
    }
    async listaProdutos(){
        const produtosSalvos = await this.produtoRepository.find();
        const produtoLista = produtosSalvos.map(
            (produto) => new ListaProdutoDTO(produto.id, produto.nome),
        );
        return produtoLista;
    }

    async atualizaProduto(id: string, novosDados: AtualizaProdutoDTO){
        const entityName = await this.produtoRepository.findOneBy({id});
        Object.assign(entityName, novosDados);
        await this.produtoRepository.save(entityName);
    }

    async deletaProduto(id: string){
        await this.produtoRepository.delete(id);
    }
}