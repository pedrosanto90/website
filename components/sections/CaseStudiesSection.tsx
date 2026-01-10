"use client";

import { useEffect, useRef, useState } from "react";

import caseStudies from "@/data/caseStudies";
import siteContent from "@/data/content";

export default function CaseStudiesSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const offset = scroller.clientWidth * 0.8;
    scroller.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              {siteContent.caseStudies.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {siteContent.caseStudies.subtitle}
            </p>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
            {canScrollLeft && (
              <button
                type="button"
                aria-label="Scroll case studies left"
                onClick={() => handleScroll("left")}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/95 p-2 text-gray-600 shadow-sm transition hover:shadow-md"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M15.5 10a.75.75 0 01-.75.75H7.06l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5a.75.75 0 111.06 1.06L7.06 9.25h7.69a.75.75 0 01.75.75z" />
                </svg>
              </button>
            )}
            {canScrollRight && (
              <button
                type="button"
                aria-label="Scroll case studies right"
                onClick={() => handleScroll("right")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/95 p-2 text-gray-600 shadow-sm transition hover:shadow-md"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M4.5 10a.75.75 0 01.75-.75h7.69l-2.22-2.22a.75.75 0 111.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H5.25A.75.75 0 014.5 10z" />
                </svg>
              </button>
            )}
            <div
              ref={scrollerRef}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hidden"
            >
              {caseStudies.map((item) => (
                <article
                  key={item.title}
                  className="min-w-[85%] sm:min-w-[60%] md:min-w-[420px] lg:min-w-[480px] snap-start border border-gray-200 rounded-2xl p-6 shadow-sm bg-white transition hover:shadow-md"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Case study
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mt-3">{item.summary}</p>
                  <p className="text-sm text-gray-500 mt-4">{item.stack}</p>
                  <p className="text-gray-700 mt-4">{item.outcome}</p>
                  <p className="text-sm text-gray-500 mt-4">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
