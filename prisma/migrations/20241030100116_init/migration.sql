-- DropIndex
DROP INDEX "Row_column_key";

-- DropIndex
DROP INDEX "Row_row_key";

-- AlterTable
ALTER TABLE "Row" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Row_pkey" PRIMARY KEY ("id");
