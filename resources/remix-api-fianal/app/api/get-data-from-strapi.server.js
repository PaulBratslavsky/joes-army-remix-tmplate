export async function getDataFromStrapi(url, params) {
  const baseUrl = process.env.BASE_URL
  const query = `/api/${url}?${params}`
  return await fetch(baseUrl + query)
}