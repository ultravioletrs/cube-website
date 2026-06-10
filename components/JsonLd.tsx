type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

export default function JsonLd({ data }: { data: JsonLdData }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
      ))}
    </>
  );
}
