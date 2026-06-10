import Link from "next/link";
import { Github } from "lucide-react";
import type { Author } from "@/lib/authors";

interface DocAttributionProps {
  authors: Author[];
  lastModified?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(lastModified?: string) {
  if (!lastModified) {
    return null;
  }

  const parsedDate = new Date(lastModified);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsedDate);
}

function AuthorChip({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-2.5 py-1.5">
      <span className="flex size-8 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-foreground">
        {getInitials(author.name)}
      </span>

      <div className="flex flex-col leading-tight">
        {author.url ? (
          <Link
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-foreground hover:underline"
          >
            {author.name}
          </Link>
        ) : (
          <span className="text-xs font-medium text-foreground">{author.name}</span>
        )}

        <span className="text-[11px] text-muted-foreground">{author.role}</span>
      </div>

      {author.github ? (
        <Link
          href={`https://github.com/${author.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${author.name} on GitHub`}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="size-3.5" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export function DocAttribution({ authors, lastModified }: DocAttributionProps) {
  const label =
    authors.length === 1 && authors[0].id === "abstract-machines"
      ? "Maintained by"
      : authors.length === 1
        ? "Author"
        : "Authors";

  const formattedDate = formatDate(lastModified);

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4 text-sm text-muted-foreground">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
          {label}
        </span>

        {authors.map((author) => (
          <AuthorChip key={author.id} author={author} />
        ))}
      </div>

      {formattedDate ? (
        <time
          dateTime={lastModified}
          className="shrink-0 text-[11px] text-muted-foreground/70"
        >
          Updated {formattedDate}
        </time>
      ) : null}
    </div>
  );
}
