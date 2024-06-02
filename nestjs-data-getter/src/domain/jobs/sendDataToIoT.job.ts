import { Cron } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';
import { IoTService } from '../services/IoT/IoT.service';

@Injectable()
export class SendDataToIoTJob {
  constructor(private readonly iotService: IoTService) {}
  private readonly logger = new Logger(SendDataToIoTJob.name);
  @Cron('*/30 * * * * *')
  handleCron() {
    this.logger.debug('Called when passed 25 seconds');
    this.iotService.sendMessage({ temperature: Math.random() * 100 });
  }
}
