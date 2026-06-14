"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useId, useState } from "react";

type ProjectModalData = {
  title: string;
  description: string;
  images: string[];
  documentUrl?: string;
  documentLabel?: string;
};

type ProjectModalProps = {
  children: ReactNode;
  modal: ProjectModalData;
};

export default function ProjectModal({ children, modal }: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button type="button" className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left text-inherit" onClick={() => setIsOpen(true)}>
        {children}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[86vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-cyan-200/20 bg-slate-950/95 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Project Showcase</p>
                <h2 id={titleId} className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {modal.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{modal.description}</p>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-bold text-slate-200 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-cyan-200/40 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                aria-label={`关闭 ${modal.title} 项目展示`}
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {modal.images.map((src, index) => (
                <div
                  key={src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                    <p className="text-sm font-semibold text-cyan-100">项目展示图 {String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">后续可替换为 {src}</p>
                  </div>
                  <Image
                    src={src}
                    alt={`${modal.title} 项目展示图 ${index + 1}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="relative z-10 object-cover opacity-90 transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>

            {modal.documentUrl ? (
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">点击下方按钮查看完整项目文档材料。</p>
                <a
                  className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                  href={modal.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {modal.documentLabel ?? "查看项目文档 ↗"}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
