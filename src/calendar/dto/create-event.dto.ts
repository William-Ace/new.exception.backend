// DTO : Data Transfer Object
import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResourceDto {
  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly startDate: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly endDate: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly allDay: boolean;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly resourceId: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly eventColor: string;
}
