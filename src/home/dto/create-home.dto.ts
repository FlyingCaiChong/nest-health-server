import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { IsString } from 'class-validator';
export class CreateHomeDto {
  @ApiProperty({
    description: 'The title of the home',
  })
  @IsString()
  title: string;
}

export const createHomeSchema = Joi.object({
  title: Joi.string().required(),
});
