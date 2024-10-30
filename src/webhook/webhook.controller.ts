import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookDto } from './dto';

@Controller('webhook')
export class WebhookController {
    constructor(
        private webhookService: WebhookService,
    ){}

    @Post()
    async handleEdit(@Body() data: WebhookDto) {
        return await this.webhookService.handleEdit(data);
    }
}
