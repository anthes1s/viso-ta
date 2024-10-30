import { Controller, Get, Param } from '@nestjs/common';
import { RowService } from './row.service';

@Controller('')
export class RowController {
    constructor(
        private rowService: RowService
    ){}

    @Get('/rows')
    getRows() {
        return this.rowService.getRows();
    }

    @Get('/rows/:id')
    getRowsById(@Param('id') id: string) {
        return this.rowService.getRowsById(id);
    }
}
