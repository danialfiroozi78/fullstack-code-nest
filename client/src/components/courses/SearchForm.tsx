"use client";

import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { Select } from "@/components/common/Select";
import useSearchForm from "@/hooks/useSearchForm";

export default function SearchForm() {
  const { submitFormFn, handleSubmit, register, searchParams } =
    useSearchForm();

  return (
    <div className="mb-7 rounded-2xl border border-border bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative w-full flex items-center gap-2">
          <Input
            type="search"
            placeholder="نام دوره یا تکنولوژی موردنظر..."
            aria-label="جستجوی دوره‌ها"
            {...register("search")}
            defaultValue={searchParams.get("search") ?? ""}
          />
          <Button
            variant="outline"
            className="px-10"
            onClick={handleSubmit(submitFormFn)}
          >
            جستجو
          </Button>
        </div>

        <div className="relative md:w-56">
          <Select
            {...register("sort")}
            options={[
              { name: "همه", id: 0 },
              { name: "جدیدترین", id: 1 },
              { name: "محبوب ترین", id: 2 },
              { name: "ارزان ترین", id: 3 },
              { name: "گران ترین", id: 4 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
