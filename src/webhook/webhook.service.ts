import { Body, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WebhookDto } from './dto';
import { Prisma } from '@prisma/client';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Injectable()
export class WebhookService {
  constructor(
    private prisma: PrismaService,
    private email: SendgridService,
  ) { }

  async handleEdit(@Body() body: WebhookDto) {
    try {
      const rowExists = await this.prisma.row.findUnique({
        where: {
          row_column: {
            row: body.row,
            column: body.column,
          }
        }
      });
      if (rowExists) {
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
        
      } else {
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

        if (row.id % 10 === 0) {
          console.log("attempting to send an email...");
          await this.email.sendEmail(...body.emails)
        }

        return row;
      }
    } catch (err: unknown) {
      throw new InternalServerErrorException(err);
    }
  }
}
