"use client";

import { useEffect, useRef, useState } from "react";

import process, { processNote } from "@/data/process";
import siteContent from "@/data/content";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="py-20 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              {siteContent.process.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{processNote}</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 hidden md:block h-px bg-gray-200" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-blue-200 bg-white text-blue-600 font-semibold">
                      {index + 1}
                    </div>
                    <div className="md:mt-4">
                      <h3 className="text-xl font-semibold text-gray-900 mt-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mt-3">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
