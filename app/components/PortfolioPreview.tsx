import { Link } from "@remix-run/react";

import type { PortfolioEntry } from "@prisma/client";

type PortfolioPreviewProps = {
  entry: PortfolioEntry;
};

export default function PortfolioPreview(props: PortfolioPreviewProps) {
  const { entry } = props;
  return (
    <Link prefetch="intent" to={`/portfolio/${entry.id}`}>
      <div
        key={entry.title}
        className="group h-96 cursor-pointer overflow-hidden rounded-lg bg-cover"
        style={{
          backgroundImage: `url(${entry.imageUrl})`,
        }}
      >
        <div className="flex h-full w-full flex-col justify-center bg-gray-800/60 px-8 py-4 opacity-0 backdrop-blur-sm transition-opacity duration-700 group-hover:opacity-100">
          <h2 className="mt-4 text-2xl font-semibold capitalize text-white">
            {entry.title}
          </h2>
          <p className="mt-2 text-lg uppercase tracking-wider text-blue-400 ">
            {entry.workScope}
          </p>
        </div>
      </div>
    </Link>
  );
}
