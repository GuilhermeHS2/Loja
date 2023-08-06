import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators/http';
import { UsuarioRepository } from './usuario.repository';
@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
  @Get()
  async listUsuarios(){
    return this.usuarioRepository.listar();
  }
}
