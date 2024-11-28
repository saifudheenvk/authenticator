import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLoggerOptions, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { setupSession } from './setups/setup-session';
import { setupCors } from './setups/cors-setup';
import { AppLogger } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get<ConfigService>(ConfigService);
  const loggerOptions: ConsoleLoggerOptions =
    configService.get('LOG_LEVEL') === 'DEBUG'
      ? { logLevels: ['log', 'error', 'debug'] }
      : { logLevels: ['log', 'error'] };
  app.useLogger(new AppLogger('', loggerOptions));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const baseUrl = configService.get<string>('BASE_URL') || 'api';
  app.setGlobalPrefix(baseUrl);
  app.use(setupSession());
  app.enableCors(setupCors());
  await app.listen(configService.get('PORT') ?? 5001);
}
bootstrap();
