import SITE_INDEX from './siteIndex';

// Simple token-overlap retriever for client-side use.
// It's intentionally lightweight — for small sites this performs well enough.
export function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[\W_]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

export function score(query: string, docText: string) {
  const qTokens = tokenize(query);
  const dTokens = new Set(tokenize(docText));
  let common = 0;
  for (const t of qTokens) if (dTokens.has(t)) common++;
  return common / Math.sqrt(qTokens.length * dTokens.size + 1);
}

export function retrieve(query: string, k = 3) {
  if (!query || !query.trim()) return [];
  const scores = SITE_INDEX.map((doc) => ({
    doc,
    s: score(query, doc.content),
  }));
  scores.sort((a, b) => b.s - a.s);
  return scores.slice(0, k).filter((x) => x.s > 0).map((x) => x.doc);
}

export default retrieve;
