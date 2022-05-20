import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { LogsModule } from './logs/logs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    LogsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'logs.db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
