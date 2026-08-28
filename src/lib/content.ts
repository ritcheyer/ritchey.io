type EntryWithPath = {
  id: string;
  slug?: string;
};

export function entryPath(entry: EntryWithPath) {
  const source = entry.slug ?? entry.id;

  return source.replace(/\.mdx?$/, '').replace(/\/index$/, '');
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function sortNewestFirst<T extends { data: { pubDate: Date } }>(entries: T[]) {
  return [...entries].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
