import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDTO{

    @IsNotEmpty({ message: 'O nome nao pode ser vazio'})
    nome: string;
    
    @IsEmail(undefined, {message: 'O e-mail informado e invalido'})
    email: string;
    
    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres' })
    senha: string;
}