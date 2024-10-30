import { Body, Controller, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {

    @Post()
    handleEdit(@Body() data: any) {
        console.log(data);
    }
}
