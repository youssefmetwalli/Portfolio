"use client";

import { useMemo, useState } from "react";
import { PUBLICATIONS } from "@/common/constants/publications";
import PublicationCard from "./PublicationCard";

const TAGS = Array.from(new Set(PUBLICATIONS.flatMap(p => p.tags ?? [])));

export default function Publications() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return PUBLICATIONS.filter(p => {
      const hit =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.authors.join(" ").toLowerCase().includes(term) ||
        p.venue.toLowerCase().includes(term) ||
        String(p.date).includes(term);
      const tagOk = !tag || (p.tags ?? []).includes(tag);
      return hit && tagOk;
    })
    // .sort((a, b) => b.date - a.date);
  }, [q, tag]);

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold">Publications</h2>
          <p className="text-neutral-400 mt-1">
            Peer-reviewed papers, workshops, and preprints.
          </p>
        </div>

        <div className="flex gap-2">
          <input
            className="h-10 w-56 rounded-xl bg-neutral-900 border border-neutral-800 px-3 text-sm outline-none focus:ring-2 focus:ring-neutral-700"
            placeholder="Search…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <select
            className="h-10 rounded-xl bg-neutral-900 border border-neutral-800 px-3 text-sm outline-none focus:ring-2 focus:ring-neutral-700"
            value={tag ?? ""}
            onChange={e => setTag(e.target.value || null)}
          >
            <option value="">Filter tags…</option>
            {TAGS.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-neutral-500">Total: {list.length}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <PublicationCard key={p.id} pub={p} />)}
      </div>
    </section>
  );
}
