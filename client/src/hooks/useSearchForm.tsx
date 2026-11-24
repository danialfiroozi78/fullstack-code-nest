"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { watch, register, handleSubmit } = useForm<{
    search?: string;
    sort?: string;
  }>({
    defaultValues: {
      search: searchParams.get("search") ?? "",
    },
  });

  const searchValue = watch("search");
  const sortValue = watch("sort");

  const submitFormFn: SubmitHandler<{ search?: string }> = (data) => {
    const search = data.search?.trim()?.toLowerCase();
    const params = new URLSearchParams(searchParams.toString());

    if (search) params.set("search", search);
    else params.delete("search");

    const query = params.toString();

    router.push(`/courses${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (searchValue === "" && searchParams.has("search")) {
      const params = new URLSearchParams(searchParams.toString());

      params.delete("search");

      const query = params.toString();

      router.replace(`/courses${query ? `?${query}` : ""}`, {
        scroll: false,
      });
    }
  }, [searchValue, searchParams, router]);

  useEffect(() => {
    if (sortValue === undefined) return;

    const currentSort = searchParams.get("sort") ?? "";
    const newSort = String(sortValue);

    if (currentSort === newSort) return;

    const params = new URLSearchParams(searchParams.toString());

    if (newSort === "0" || newSort === "") {
      params.delete("sort");
    } else {
      params.set("sort", newSort);
    }

    const query = params.toString();

    router.replace(`/courses${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  }, [sortValue, searchParams, router]);

  return {
    submitFormFn,
    handleSubmit,
    register,
    searchParams,
  };
}
