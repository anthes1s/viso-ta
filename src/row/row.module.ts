import { Module } from '@nestjs/common';
import { RowService } from './row.service';

@Module({
  providers: [RowService]
})
export class RowModule {}
