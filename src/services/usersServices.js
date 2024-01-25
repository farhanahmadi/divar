import http from "@/services/httpService";

export function getUsers() {
  return http.get("/users").then(({ data }) => data);
}
export function createUser(data) {
  return http.post("/users", data).then(({ data }) => data);
}
export function createUserJWT(data) {
  return http
    .post("https://api.escuelajs.co/api/v1/users/", data)
    .then(({ data }) => data);
}
