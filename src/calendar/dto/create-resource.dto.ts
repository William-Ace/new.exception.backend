// DTO : Data Transfer Object
import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResourceDto {
  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly eventColor: string;
}
