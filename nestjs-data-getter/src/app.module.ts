import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { JobsModule } from './domain/jobs/jobs.module';
import { PrecipitationStationModule } from './domain/services/precipitation-station/precipitation-station.module';
import { PrecipitationStationModule } from './domain/services/precipitation-station/precipitation-station.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    JobsModule,
    PrecipitationStationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
