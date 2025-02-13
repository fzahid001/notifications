import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BuyPPTDocument = BuyPPT & Document;

@Schema()
export class BuyPPT {
  @Prop({ required: true, type: Number })
  pptAmount: number;

  @Prop({ required: true, type: Number })
  costInUSDT: number;
}

export const BuyPPTSchema = SchemaFactory.createForClass(BuyPPT);
