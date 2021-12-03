import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mongodb:mongodb@cluster0.oxjtc.mongodb.net/vgsbank?retryWrites=true&w=majority'), TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


