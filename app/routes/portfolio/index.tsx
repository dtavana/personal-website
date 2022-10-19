import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPortfolioEntries } from "~/models/portfolioentry.server";
import PortfolioPreview from "~/components/PortfolioPreview";

type LoaderData = {
  portfolioEntries: Awaited<ReturnType<typeof getPortfolioEntries>>;
};

export const loader = async () => {
  return json<LoaderData>({
    portfolioEntries: await getPortfolioEntries(),
  });
};

export default function PortfolioIndex() {
  const { portfolioEntries } = useLoaderData() as LoaderData;
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <section className="bg-white dark:bg-gray-900">
              <div className="container mx-auto px-6 py-10">
                <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
                  My Portfolio
                </h1>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
                  {portfolioEntries.map((entry) => (
                    <PortfolioPreview key={entry.id} entry={entry} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
