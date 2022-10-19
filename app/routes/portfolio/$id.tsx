import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPortfolioEntry } from "~/models/portfolioentry.server";
import type { PortfolioEntry } from "@prisma/client";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, `params.id is required`);
  const entry = await getPortfolioEntry(params.id);
  invariant(entry, `Portfolio Entry not found: ${params.id}`);
  return json<PortfolioEntry>(entry);
};

export default function PortfolioRoute() {
  const entry = useLoaderData() as PortfolioEntry;
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl"></div>
        </div>
      </div>
    </main>
  );
}
