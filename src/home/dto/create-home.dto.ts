import { ApiProperty } from '@nestjs/swagger';
export class CreateHomeDto {
  @ApiProperty({
    description: 'The title of the home',
  })
  title: string;
}
