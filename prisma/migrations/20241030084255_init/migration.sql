-- CreateTable
CREATE TABLE "Row" (
    "row" INTEGER NOT NULL,
    "column" INTEGER NOT NULL,
    "value" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Row_row_key" ON "Row"("row");

-- CreateIndex
CREATE UNIQUE INDEX "Row_column_key" ON "Row"("column");
