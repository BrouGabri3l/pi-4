import { Module } from '@nestjs/common';
import { SendDataToIoTJob } from './sendDataToIoT.job';
import { IoTModule } from '../services/IoT/IoT.module';

@Module({
  imports: [IoTModule],
  controllers: [],
  providers: [SendDataToIoTJob],
  exports: [SendDataToIoTJob],
})
export class JobsModule {}
