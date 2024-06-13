import { Module } from '@nestjs/common';
import { PrecipitationStationService } from './precipitation-station.service';
import { PrecipitationStationController } from './precipitation-station.controller';

@Module({
  providers: [PrecipitationStationService],
  controllers: [PrecipitationStationController],
})
export class PrecipitationStationModule {}
