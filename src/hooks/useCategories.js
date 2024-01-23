import { useMutation, useQuery } from "@tanstack/react-query";

//import categories service
import { getCategories } from "@/services/categoriesService";

// get all categories function
export function useGetCategories() {
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });
}
