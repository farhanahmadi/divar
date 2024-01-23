import http from "@/services/httpService";

export function getCategories() {
  return http.get("/categories").then(({ data }) => data);
}
