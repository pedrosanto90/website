"use client";

import { useMemo, useState } from "react";

import data from "@/utils/consts";
import siteContent from "@/data/content";
export default function Skills() {
  const skillCategories = data.skills;
  const [activeCategoryId, setActiveCategoryId] = useState(
    skillCategories[0]?.id ?? "",
  );

  const activeCategory = useMemo(
    () =>
      skillCategories.find((category) => category.id === activeCategoryId) ??
      skillCategories[0],
    [activeCategoryId, skillCategories],
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">
              Skills
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              {siteContent.skills.title}
            </h2>
          </div>
          <div
            className="flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${category.id}`}
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
          <p className="text-center text-sm text-gray-500 mt-4">
            {activeCategory?.summary}
          </p>
          <div
            id={`skills-panel-${activeCategory?.id ?? "active"}`}
            role="tabpanel"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"
          >
            {activeCategory?.items.map((skill) => (
              <div
                key={skill}
                className="bg-white px-4 py-3 rounded-full border border-gray-200 text-center font-medium text-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
