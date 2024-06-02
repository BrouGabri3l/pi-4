import { Module } from '@nestjs/common';
import { IoTService } from './IoT.service';

@Module({
  imports: [],
  controllers: [],
  providers: [IoTService],
  exports: [IoTService],
})
export class IoTModule {}
