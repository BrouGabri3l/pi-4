import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PrecipitationStation } from '../../schemas/precipitationStation.schema';

@Injectable()
export class PrecipitationStationService {
  constructor(
    @InjectModel(PrecipitationStation.name)
    private stationModel: Model<PrecipitationStation>,
  ) {}

  async create(createStationDto: any): Promise<PrecipitationStation> {
    const createdStation = new this.stationModel(createStationDto);
    return createdStation.save();
  }

  async findAll(): Promise<PrecipitationStation[]> {
    return this.stationModel.find().exec();
  }

  async findOne(id: string): Promise<PrecipitationStation> {
    return this.stationModel.findById(id).exec();
  }

  async update(
    id: string,
    updateStationDto: any,
  ): Promise<PrecipitationStation> {
    return this.stationModel
      .findByIdAndUpdate(id, updateStationDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.stationModel.findByIdAndRemove(id).exec();
  }
}
