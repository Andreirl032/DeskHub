import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

enum Role {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  AGENT = 'AGENT',
  CLIENT = 'CLIENT',
}

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(Role)
  role!: Role;

  @IsString()
  @IsOptional()
  organizationId?: string;

  @IsString()
  @IsOptional()
  googleId?: string;
}
