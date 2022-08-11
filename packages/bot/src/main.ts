/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { BotModule } from './app/bot.module';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BotModule,
    {
      transport: Transport.TCP,
    }
  );

  await app.listen();
  Logger.log(`🚀 Bot is running as a microservice`);
}

bootstrap();
