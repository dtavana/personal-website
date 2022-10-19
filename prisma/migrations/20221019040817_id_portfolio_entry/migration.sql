/*
  Warnings:

  - The required column `id` was added to the `PortfolioEntry` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PortfolioEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "workScope" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descriptionMd" TEXT NOT NULL
);
INSERT INTO "new_PortfolioEntry" ("descriptionMd", "imageUrl", "title", "url", "workScope") SELECT "descriptionMd", "imageUrl", "title", "url", "workScope" FROM "PortfolioEntry";
DROP TABLE "PortfolioEntry";
ALTER TABLE "new_PortfolioEntry" RENAME TO "PortfolioEntry";
CREATE UNIQUE INDEX "PortfolioEntry_title_key" ON "PortfolioEntry"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
