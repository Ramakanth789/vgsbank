
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop()
  date: string;

  @Prop()
  amount: number;

  @Prop()
  transactionTypeId: number;
  @Prop()
  currency: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
