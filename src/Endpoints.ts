type Endpoint = {
  url: string
  method: Method
}
enum Method {
  "POST" = "post",
  "GET" = "get",
  "PATCH" = "patch",
  "PUT" = "put",
  "DELETE" = "delete",
}

const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://bech-doo.herokuapp.com"

export const signupEndpoint: Endpoint = {
  url: baseUrl + "/signup",
  method: Method.POST,
}

export const loginEndpoint: Endpoint = {
  url: baseUrl + "/",
  method: Method.POST,
}

export const profileEndpoint: Endpoint = {
  url: baseUrl + "/protected",
  method: Method.GET,
}

export const allPostsEndpoint: Endpoint = {
  url: baseUrl + "/protected/posts",
  method: Method.GET,
}

export const postsByTagEndpoint: Endpoint = {
  url: baseUrl + "/protected/posts",
  method: Method.GET,
}

export const createPostEndpoint: Endpoint = {
  url: baseUrl + "/protected/create",
  method: Method.POST,
}
