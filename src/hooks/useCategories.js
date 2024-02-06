import { useMutation, useQuery } from "@tanstack/react-query";

//import categories service
import { getCategories, getSubCategories } from "@/services/categoriesService";

// get all categories function
export function useGetCategories() {
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });
}

// get all sub categories function
export function useGetSubCategories(slug) {
  return useQuery({
    queryKey: ["get-sub-categories", slug],
    queryFn: () => getSubCategories(slug),
    retry: false,
    refetchOnWindowFocus: true,
  });
}
