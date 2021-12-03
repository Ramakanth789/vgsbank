import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction, TransactionDocument } from './schemas/transaction.schemas';

@Injectable()
export class TransactionsService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}

  async create(createCatDto: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = new this.transactionModel(createCatDto);
    return createdTransaction.save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    console.log(id, updateTransactionDto )
    return await this.transactionModel.findByIdAndUpdate(id, updateTransactionDto, {new:true}).exec();
  }

  async remove(id: string) {
   return await this.transactionModel.findByIdAndDelete(id).exec();
  } 
}
