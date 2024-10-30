import { Controller, Get, Param } from '@nestjs/common';
import { RowService } from './row.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('')
export class RowController {
  constructor(private rowService: RowService) {}

  @Get('/rows')
  @ApiOperation({ summary: "Get every row written to a database" })
  @ApiResponse({ status: 200, description: "Every row successfully extracted" })
  @ApiResponse({ status: 500, description: "Unexpected error"})
  getRows() {
    return this.rowService.getRows();
  }

  @Get('/rows/:id')
  @ApiOperation({ summary: "Get a row by ID" })
  @ApiResponse({ status: 200, description: "Row successfully extracted" })
  @ApiResponse({ status: 400, description: "ID is not a number"})
  @ApiResponse({ status: 404, description: "Row not found"})
  @ApiResponse({ status: 500, description: "Unexpected error"})
  getRowsById(@Param('id') id: string) {
    return this.rowService.getRowsById(id);
  }
}
