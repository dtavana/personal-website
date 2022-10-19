import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const entries = [
    {
      title: "My First Portfolio Entry",
      imageUrl: "https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=TwYKwaEjJd4",
      descriptionMd: `
      # This is a test portfolio entry
      
      Hello world
      `.trim(),
      workScope: "Personal",
    },
  ];

  for (const entry of entries) {
    await prisma.portfolioEntry.upsert({
      where: { title: entry.title },
      update: entry,
      create: entry,
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
