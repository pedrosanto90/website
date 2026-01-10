"use client";

import { useMemo, useState } from "react";

import serviceCategories from "@/data/services";
import siteContent from "@/data/content";

export default function ServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    serviceCategories[0]?.id ?? "",
  );

  const activeCategory = useMemo(
    () =>
      serviceCategories.find((category) => category.id === activeCategoryId) ??
      serviceCategories[0],
    [activeCategoryId],
  );

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">
              Services
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              {siteContent.services.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {siteContent.services.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div
              className="flex flex-wrap justify-center gap-3"
              role="tablist"
              aria-label="Service categories"
            >
              {serviceCategories.map((category) => {
                const isActive = category.id === activeCategoryId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`services-panel-${category.id}`}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition cursor-pointer hover:-translate-y-0.5 hover:shadow-sm ${
                      isActive
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800"
                    }`}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-500">
                {activeCategory?.summary}
              </p>
            </div>
          </div>
          <div
            id={`services-panel-${activeCategory?.id ?? "active"}`}
            role="tabpanel"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          >
            {activeCategory?.items.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 mt-4">{service.benefit}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-4">
                  Typical stack
                </p>
                <p className="text-sm text-gray-600 mt-2">{service.stack}</p>
                <a
                  href="#contact"
                  className="inline-flex mt-5 text-blue-600 font-medium hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {siteContent.services.cardCtaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
