import { Test, TestingModule } from '@nestjs/testing';
import { PrecipitationStationController } from './precipitation-station.controller';
import { PrecipitationStationService } from './precipitation-station.service';
import { CreatePrecipitationStationDto } from '../../dtos/createPrecipitationStation.dto';
import { UpdatePrecipitationStationDto } from '../../dtos/updatePrecipitationStation.dto';

describe('PrecipitationStationController', () => {
  let controller: PrecipitationStationController;
  let service: PrecipitationStationService;

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

  const mockService = {
    create: jest.fn().mockResolvedValue(mockStation),
    findAll: jest.fn().mockResolvedValue([mockStation]),
    findOne: jest.fn().mockResolvedValue(mockStation),
    update: jest.fn().mockResolvedValue(mockStation),
    delete: jest.fn().mockResolvedValue(mockStation),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrecipitationStationController],
      providers: [
        {
          provide: PrecipitationStationService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<PrecipitationStationController>(
      PrecipitationStationController,
    );
    service = module.get<PrecipitationStationService>(
      PrecipitationStationService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a precipitation station', async () => {
    const createStationDto: CreatePrecipitationStationDto = {
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
    expect(await controller.create(createStationDto)).toEqual(mockStation);
    expect(service.create).toHaveBeenCalledWith(createStationDto);
  });

  it('should return all precipitation stations', async () => {
    expect(await controller.findAll()).toEqual([mockStation]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a precipitation station by ID', async () => {
    const id = 'someId';
    expect(await controller.findOne(id)).toEqual(mockStation);
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('should update a precipitation station', async () => {
    const id = 'someId';
    const updateStationDto: UpdatePrecipitationStationDto = {
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
    expect(await controller.update(id, updateStationDto)).toEqual(mockStation);
    expect(service.update).toHaveBeenCalledWith(id, updateStationDto);
  });

  it('should delete a precipitation station', async () => {
    const id = 'someId';
    expect(await controller.delete(id)).toEqual(mockStation);
    expect(service.delete).toHaveBeenCalledWith(id);
  });
});
