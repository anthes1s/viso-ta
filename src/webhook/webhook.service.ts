import { Body, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WebhookDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class WebhookService {
  constructor(private prisma: PrismaService) {}

  async handleEdit(@Body() body: WebhookDto) {
    try {
      console.log("WebhookDto -", body);
      const row = await this.prisma.row.create({
        data: {
          row: body.row,
          column: body.column,
          value: body.value,
        },
        select: {
          id: true,
        }
      });
      // If total amount of rows % 10 === 0, send notification to emails from the dto.

      return row;
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          const row = await this.prisma.row.update({
            where: {
              row_column: {
                row: body.row,
                column: body.column,
              },
            },
            data: {
              value: body.value,
            },
          });
          return row;
        }
      }
      throw new InternalServerErrorException(err);
    }
  }
}
