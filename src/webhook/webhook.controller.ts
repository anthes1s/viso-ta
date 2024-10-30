import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookDto } from './dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('webhook')
@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) {}

  @Post()
  @ApiOperation({ summary: "Receive updates from Google Sheet"})
  @ApiBody({ type: WebhookDto })
  @ApiResponse({ status: 201, description: "Update received and written to a database"})
  @ApiResponse({ status: 500, description: "Unexpected error"})
  async handleEdit(@Body() data: WebhookDto) {
    return await this.webhookService.handleEdit(data);
  }
}
