import http from "@/services/httpService";

export function getCategories() {
  return http.get("/categories").then(({ data }) => data);
}

export function getSubCategories(slug) {
  return http.get(`/categories/subCategories/${slug}`).then(({ data }) => data);
}
