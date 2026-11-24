"use client";

import { useState } from "react";
import { CheckboxGroup } from "@/components/common/CheckboxGroup";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/common/Button";
import useCategories from "@/hooks/useCategories";

export default function Categories() {
  const { deleteFilters, control, handleCategoryChanges, categories } =
    useCategories();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:col-span-3">
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="categories-panel"
        className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-card px-4 py-4 text-sm font-semibold text-text-secondary md:hidden"
      >
        <span className="flex items-center gap-2">
          <Filter size={18} className="text-rose-600" />
          فیلتر دسته‌بندی‌ها
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Categories panel */}
      <div
        id="categories-panel"
        className={`
          rounded-xl bg-card p-5
          ${isOpen ? "mt-3 block" : "hidden"}
          md:mt-0 md:block
        `}
      >
        <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4">
          <span className="flex items-center gap-2 text-base font-semibold text-text-secondary">
            <Filter size={18} />
            دسته‌بندی:
          </span>

          <Button variant="ghost" onClick={deleteFilters}>
            حذف فیلتر
          </Button>
        </div>

        <CheckboxGroup
          className="w-full py-3"
          name="categories"
          control={control}
          options={categories}
          onValueChange={handleCategoryChanges}
        />

        {/* Mobile close */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mt-5 w-full rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700 md:hidden"
        >
          مشاهده دوره‌ها
        </button>
      </div>
    </div>
  );
}
