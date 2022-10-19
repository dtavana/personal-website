import { prisma } from "~/db.server";

type PortfolioEntry = {
  title: string;
  workScope: string;
  imageUrl: string;
  url: string;
  descriptionMd: string;
};

export async function getPortfolioEntries(): Promise<Array<PortfolioEntry>> {
  return [
    {
      title: "My First Portfolio Entry",
      workScope: "Personal",
      imageUrl: "",
      url: "",
      descriptionMd: "This is a description",
    },
  ];
}
