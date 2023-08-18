import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO{

    @IsNotEmpty({ message: 'O nome nao pode ser vazio'})
    nome: string;
    
    @IsEmail(undefined, {message: 'O e-mail informado e invalido'})
    @EmailEhUnico({message: 'Ja existe um usuario com este e-mail'})
    email: string;
    
    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres' })
    senha: string;
}