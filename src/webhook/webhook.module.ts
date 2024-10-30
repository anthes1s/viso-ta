import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { SendgridModule } from 'src/sendgrid/sendgrid.module';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Module({
  imports: [SendgridModule],
  providers: [WebhookService, SendgridService],
  controllers: [WebhookController],
})
export class WebhookModule {}
