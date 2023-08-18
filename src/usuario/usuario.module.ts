import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoVlidator } from "./validacao/email-eh-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoVlidator]
})
export class UsuarioModule {}