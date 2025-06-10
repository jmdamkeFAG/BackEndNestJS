import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateAlunoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  dataNasc: Date;
}
