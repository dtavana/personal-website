import { prisma } from "~/db.server";

import type { PortfolioEntry } from "@prisma/client";

export async function getPortfolioEntries(): Promise<Array<PortfolioEntry>> {
  return await prisma.portfolioEntry.findMany();
}

export async function getPortfolioEntry(
  id: string
): Promise<PortfolioEntry | null> {
  return await prisma.portfolioEntry.findFirst({ where: { id } });
}
