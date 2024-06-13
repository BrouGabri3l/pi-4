import { IsString, IsInt, IsNumber, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePrecipitationStationDto {
  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  Code: string;

  @IsInt()
  @Type(() => Number)
  Type: number;

  @IsInt()
  @Type(() => Number)
  SubBasin: number;

  @IsString()
  @IsNotEmpty()
  City: string;

  @IsString()
  @IsNotEmpty()
  State: string;

  @IsString()
  @IsNotEmpty()
  Responsible: string;

  @IsNumber()
  @Type(() => Number)
  Latitude: number;

  @IsNumber()
  @Type(() => Number)
  Longitude: number;

  @IsDate()
  @Type(() => Date)
  StartDate: Date;

  @IsDate()
  @Type(() => Date)
  EndDate: Date;

  @IsInt()
  @Type(() => Number)
  NYD: number;

  @IsNumber()
  @Type(() => Number)
  MD: number;

  @IsInt()
  @Type(() => Number)
  N_YWOMD: number;

  @IsNumber()
  @Type(() => Number)
  YWMD: number;
}
