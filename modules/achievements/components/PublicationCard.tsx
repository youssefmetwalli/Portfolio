"use client";

import { Publication } from "@/common/types/publications";
import { ExternalLink, FileText, Github, Link as LinkIcon, Copy } from "lucide-react";
import { useState } from "react";

export default function PublicationCard({ pub }: { pub: Publication }) {
  const [copied, setCopied] = useState(false);

  const copyBib = async () => {
    const bib = `@article{${pub.id},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  journal={${pub.venue}},
  date={${pub.date}},
  ${pub.doi ? `doi={${pub.doi}},` : ""}
}`;
    try {
      await navigator.clipboard.writeText(bib);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="rounded-2xl border border-indigo-400/40 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-md p-4 hover:from-indigo-500/30 hover:via-purple-500/30 hover:to-blue-500/30 transition">
      <h3 className="text-lg font-semibold leading-snug">{pub.title}</h3>
      <p className="mt-1 text-md mb-2 text-neutral-400">{pub.authors.join(", ")}</p>
      <p className="mt-1 text-md">{pub.venue} · {pub.date}</p>
      <p className="mt-1 text-md text-neutral-400">Note: currently accepted for publication. hasn't been presented yet.</p>
      {pub.abstract && (
        <p className="mt-3 text-sm text-neutral-300 line-clamp-3">{pub.abstract}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {pub.url && (
          <a
            className="inline-flex items-center gap-1 rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800"
            href={pub.url}
            target="_blank"
            rel="noreferrer"
            aria-label="Open PDF"
          >
            <FileText className="h-4 w-4" /> PDF
          </a>
        )}
        {pub.doi && (
          <a
            className="inline-flex items-center gap-1 rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800"
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon className="h-4 w-4" /> DOI
          </a>
        )}
        {/* {pub.code && (
          <a
            className="inline-flex items-center gap-1 rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800"
            href={pub.code}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        )} */}
        {/* <button
          onClick={copyBib}
          className="inline-flex items-center gap-1 rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800"
          aria-label="Copy BibTeX"
        >
          <Copy className="h-4 w-4" /> {copied ? "Copied!" : "BibTeX"}
        </button> */}
      </div>

      {pub.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {pub.tags.map(t => (
            <span key={t} className="text-[11px] rounded-full bg-neutral-800/60 px-2 py-0.5 text-neutral-300 border border-neutral-700">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
