/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `PortfolioEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PortfolioEntry_title_key" ON "PortfolioEntry"("title");
