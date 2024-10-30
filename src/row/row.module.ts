import { Module } from '@nestjs/common';
import { RowService } from './row.service';
import { RowController } from './row.controller';

@Module({
  providers: [RowService],
  controllers: [RowController],
})
export class RowModule {}
