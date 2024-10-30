import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RowService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getRowsById(id: string) {
        try {
            const numericId = Number(id);

            if(Number.isNaN(numericId)) { 
                throw new BadRequestException(`${id} is not a number`);
            }

            const row = await this.prisma.row.findUnique({
                where: {
                    id: numericId,
                },
                select: {
                    id: true,
                    row: true,
                    column: true,
                    value: true
                }
            });

            if (!row) { 
                throw new NotFoundException(`${id} row is not found`);
            }

            return row;
        } catch (err: unknown) {
            throw new InternalServerErrorException();
        }
    }

    async getRows() {
        try {
            const rows = await this.prisma.row.findMany();
            return rows;
        } catch (err: unknown) {
            throw new InternalServerErrorException();
        }
    }
}
