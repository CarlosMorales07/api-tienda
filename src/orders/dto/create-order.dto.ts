import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsArray,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Total de la orden',
    example: 1299.99,
  })
  @IsNumber()
  @Min(0)
  total: number;

  @ApiProperty({
    description: 'IDs de los productos',
    example: ['123e4567-e89b-12d3-a456-426614174000'],
    type: [String],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  productIds: string[];

  @ApiProperty({
    description: 'ID del usuario',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}