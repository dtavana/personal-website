import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPortfolioEntries } from "~/models/portfolioentry.server";

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
                  Portfolio
                </h1>

                <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum quam voluptatibus
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
                  {portfolioEntries.map((portfolioEntry) => (
                    <div
                      key={portfolioEntry.title}
                      className="group h-96 cursor-pointer overflow-hidden rounded-lg bg-cover"
                      style={{
                        backgroundImage: `url(${portfolioEntry.imageUrl})`,
                      }}
                    >
                      <div className="flex h-full w-full flex-col justify-center bg-gray-800/60 px-8 py-4 opacity-0 backdrop-blur-sm transition-opacity duration-700 group-hover:opacity-100">
                        <h2 className="mt-4 text-2xl font-semibold capitalize text-white">
                          {portfolioEntry.title}
                        </h2>
                        <p className="mt-2 text-lg uppercase tracking-wider text-blue-400 ">
                          {portfolioEntry.workScope}
                        </p>
                      </div>
                    </div>
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
