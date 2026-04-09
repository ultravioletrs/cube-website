export interface Author {
  id: string;
  name: string;
  role: string;
  github?: string;
  url?: string;
  avatar?: string;
  kind?: "person" | "organization";
}

const authorRegistry: Record<string, Author> = {
  "abstract-machines": {
    id: "abstract-machines",
    name: "Abstract Machines",
    role: "Documentation Team",
    github: "absmach",
    url: "https://www.abstractmachines.fr/",
    kind: "organization",
  },
  ultraviolet: {
    id: "ultraviolet",
    name: "Ultraviolet",
    role: "Product Team",
    github: "ultravioletrs",
    url: "https://www.ultraviolet.rs/",
    kind: "organization",
  },
};

const defaultDocAuthors = [authorRegistry["abstract-machines"]];

export function resolveDocAuthors(authorIds?: string[]): Author[] {
  if (!authorIds || authorIds.length === 0) {
    return defaultDocAuthors;
  }

  const authors = authorIds
    .map((authorId) => authorRegistry[authorId])
    .filter((author): author is Author => Boolean(author));

  return authors.length > 0 ? authors : defaultDocAuthors;
}

export function toSchemaAuthors(authors: Author[]) {
  return authors.map((author) => ({
    "@type": author.kind === "person" ? "Person" : "Organization",
    name: author.name,
    ...(author.url ? { url: author.url } : {}),
    ...(author.github ? { sameAs: [`https://github.com/${author.github}`] } : {}),
  }));
}
