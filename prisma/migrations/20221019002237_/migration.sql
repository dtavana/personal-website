-- CreateTable
CREATE TABLE "PortfolioEntry" (
    "title" TEXT NOT NULL,
    "workScope" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descriptionMd" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioEntry_title_key" ON "PortfolioEntry"("title");
