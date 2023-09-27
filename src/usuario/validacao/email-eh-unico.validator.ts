/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {
registerDecorator,
ValidationArguments,
ValidationOptions,
ValidatorConstraint,
ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioService } from '../usuario.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {
constructor(private usuarioService: UsuarioService) {}

async validate(
    value: any,
    _validationArguments?: ValidationArguments,
): Promise<boolean> {
    const usuarioComEmailExiste = await this.usuarioService.buscaPorEmail(
    value,
    );
    return !usuarioComEmailExiste;
}
}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
return (objeto: object, propriedade: string) => {
    registerDecorator({
    target: objeto.constructor,
    propertyName: propriedade,
    options: opcoesDeValidacao,
    constraints: [],
    validator: EmailEhUnicoValidator,
    });
};
};