import { Test, TestingModule } from '@nestjs/testing';
import { PrecipitationStationService } from './precipitation-station.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PrecipitationStation } from '../../schemas/precipitationStation.schema';

const mockStation = {
  Name: 'SALINÓPOLIS',
  Code: '00047000',
  Type: 2,
  SubBasin: 32,
  City: 'SALINÓPOLIS',
  State: 'PARÁ',
  Responsible: 'INMET',
  Latitude: -0.65,
  Longitude: -47.55,
  StartDate: new Date('1958-01-01'),
  EndDate: new Date('1964-12-31'),
  NYD: 7,
  MD: 25.0,
  N_YWOMD: 0,
  YWMD: 100.0,
};

describe('PrecipitationStationService', () => {
  let service: PrecipitationStationService;
  let model: Model<PrecipitationStation>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrecipitationStationService,
        {
          provide: getModelToken(PrecipitationStation.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockStation),
            constructor: jest.fn().mockResolvedValue(mockStation),
            find: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndRemove: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PrecipitationStationService>(
      PrecipitationStationService,
    );
    model = module.get<Model<PrecipitationStation>>(
      getModelToken(PrecipitationStation.name),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a station', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockStation));
    const station = await service.create(mockStation);
    expect(station).toEqual(mockStation);
  });

  it('should return all stations', async () => {
    jest.spyOn(model, 'find').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce([mockStation]),
    } as any);
    const stations = await service.findAll();
    expect(stations).toEqual([mockStation]);
  });

  it('should return a station by ID', async () => {
    jest.spyOn(model, 'findById').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(mockStation),
    } as any);
    const station = await service.findOne('someId');
    expect(station).toEqual(mockStation);
  });

  it('should update a station', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(mockStation),
    } as any);
    const station = await service.update('someId', mockStation);
    expect(station).toEqual(mockStation);
  });

  it('should delete a station', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(mockStation),
    } as any);
    const result = await service.delete('someId');
    expect(result).toEqual(mockStation);
  });
});
