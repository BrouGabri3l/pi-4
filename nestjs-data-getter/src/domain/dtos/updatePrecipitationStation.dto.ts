import { PartialType } from '@nestjs/mapped-types';
import { CreatePrecipitationStationDto } from './createPrecipitationStation.dto';

export class UpdatePrecipitationStationDto extends PartialType(
  CreatePrecipitationStationDto,
) {}
