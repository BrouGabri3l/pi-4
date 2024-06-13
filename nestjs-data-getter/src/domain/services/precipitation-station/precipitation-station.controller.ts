import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PrecipitationStationService } from './precipitation-station.service';
import { CreatePrecipitationStationDto } from '../../dtos/createPrecipitationStation.dto';
import { UpdatePrecipitationStationDto } from '../../dtos/updatePrecipitationStation.dto';

@Controller('stations')
export class PrecipitationStationController {
  constructor(private readonly stationService: PrecipitationStationService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createStationDto: CreatePrecipitationStationDto) {
    return this.stationService.create(createStationDto);
  }

  @Get()
  async findAll() {
    return this.stationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.stationService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: string,
    @Body() updateStationDto: UpdatePrecipitationStationDto,
  ) {
    return this.stationService.update(id, updateStationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.stationService.delete(id);
  }
}
