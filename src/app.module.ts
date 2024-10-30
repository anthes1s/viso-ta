import { Module } from '@nestjs/common';
import { WebhookModule } from './webhook/webhook.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { RowController } from './row/row.controller';
import { RowModule } from './row/row.module';
import { RowService } from './row/row.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [WebhookModule, PrismaModule, RowModule, CacheModule.register()],
  controllers: [RowController],
  providers: [PrismaService, RowService],
})
export class AppModule {}
