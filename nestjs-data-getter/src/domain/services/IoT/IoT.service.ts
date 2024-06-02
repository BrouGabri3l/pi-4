import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Message } from 'azure-iot-device';
import { Mqtt } from 'azure-iot-device-mqtt';

@Injectable()
export class IoTService {
  private readonly client: Client;
  private readonly logger = new Logger(IoTService.name);

  constructor(private readonly configService: ConfigService) {
    this.client = Client.fromConnectionString(
      this.configService.get('IOT_CONNECTION_STRING'),
      Mqtt,
    );
    this.client.open((err) => {
      if (err) {
        this.logger.error('Could not connect: ' + err.message);
      } else {
        this.logger.log('Client connected');
      }
    });
  }

  async sendMessage(data: any) {
    try {
      const message = new Message(JSON.stringify(data));
      const enqueuedMessage = await this.client.sendEvent(message);
      this.logger.log('Message sent: ' + enqueuedMessage.transportObj.payload);
    } catch (err) {
      this.logger.error('Send error: ' + err);
      throw new InternalServerErrorException(err);
    }
  }
}
