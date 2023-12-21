import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
export class CreateHomeDto {
  @ApiProperty({
    description: 'The title of the home',
  })
  title: string;
}

export const createHomeSchema = Joi.object({
  title: Joi.string().required(),
});
