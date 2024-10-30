/*
  Warnings:

  - A unique constraint covering the columns `[row,column]` on the table `Row` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Row_row_column_key" ON "Row"("row", "column");
