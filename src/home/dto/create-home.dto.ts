import { ApiProperty } from '@nestjs/swagger';
export class CreateHomeDto {
  @ApiProperty({
    description: 'The name of the home',
  })
  name: string;
}
