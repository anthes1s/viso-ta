import { ApiProperty } from "@nestjs/swagger";

export class WebhookDto {
  @ApiProperty({ description: "Google Sheet row number", type: Number })
  row: number;

  @ApiProperty({ description: "Google Sheet column number", type: Number})
  column: number;

  @ApiProperty({ description: "Google Sheets cell value", type: String })
  value: string;
};
