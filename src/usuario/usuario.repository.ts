import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
  private usuarios = [];
  //estou criando uma lista para salvar os usuarios
  async salvar(usuario) {
    this.usuarios.push(usuario);
  }
  
  async listar(){
    return this.usuarios;
  }
}
