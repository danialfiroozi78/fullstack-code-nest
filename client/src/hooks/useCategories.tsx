"use client";

import { useGetCategoriesQuery } from "@/api/query/category.query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function useCategories() {
  const { control, setValues } = useForm<{ categories: string }>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryChanges = (slug: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (slug.length > 0) params.set("categories", slug.join(","));
    else params.delete("categories");

    const query = params.toString().replace(/%2C/gi, ",");

    router.replace(`${pathname}${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  };

  const { categories } = useGetCategoriesQuery(null, {
    selectFromResult: ({ data }) => ({
      categories:
        data?.data?.map((category) => ({
          label: category.name,
          value: category.slug,
        })) ?? [],
    }),
  });

  const deleteFilters = () => {
    setValues({
      categories: "",
    });

    const params = new URLSearchParams(searchParams.toString());

    params.delete("categories");
    params.delete("sort");
    params.delete("search");

    const query = params.toString();

    router.replace(`${pathname}${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  };

  return {
    deleteFilters,
    control,
    handleCategoryChanges,
    categories,
  };
}
