import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PrecipitationStation extends Document {
  @Prop()
  Name: string;

  @Prop()
  Code: string;

  @Prop()
  Type: number;

  @Prop()
  SubBasin: number;

  @Prop()
  City: string;

  @Prop()
  State: string;

  @Prop()
  Responsible: string;

  @Prop()
  Latitude: number;

  @Prop()
  Longitude: number;

  @Prop()
  StartDate: Date;

  @Prop()
  EndDate: Date;

  @Prop()
  NYD: number;

  @Prop()
  MD: number;

  @Prop()
  N_YWOMD: number;

  @Prop()
  YWMD: number;
}

export const PrecipitationStationSchema =
  SchemaFactory.createForClass(PrecipitationStation);
