import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoosterDocument = Booster & Document;

@Schema()
export class Booster {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Number })
  hourlyReward: number;

  @Prop({ required: true })
  boosterCost: number;
}

export const BoosterSchema = SchemaFactory.createForClass(Booster);
