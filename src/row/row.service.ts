import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Row } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RowService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cache: Cache,
  ) {}

  async getRowsById(id: string) {
    try {
      const numericId = Number(id);

      if (Number.isNaN(numericId)) {
        throw new BadRequestException(`${id} is not a number`);
      }

      const value: Row = await this.cache.get(`rows/${id}`);
      if (value) {
        return value;
      }

      const row = await this.prisma.row.findUnique({
        where: {
          id: numericId,
        }
      });

      if (!row) {
        throw new NotFoundException(`${id} row is not found`);
      }

      await this.cache.set(`rows/${id}`, row, 3600);

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

