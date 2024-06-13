import { PrecipitationStation } from '../../domain/schemas/precipitationStation.schema';

export interface IPrecipitationStationService {
  create(createStationDto: any): Promise<PrecipitationStation>;
  findAll(): Promise<PrecipitationStation[]>;
  findOne(id: string): Promise<PrecipitationStation>;
  update(id: string, updateStationDto: any): Promise<PrecipitationStation>;
  delete(id: string): Promise<any>;
}
