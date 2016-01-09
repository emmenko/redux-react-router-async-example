export default function processResponse (response) {
  let isOk = response.ok

  return response.text()
  .then(body => {
    try { body = JSON.parse(body) }
    catch (error) { if (isOk) isOk = false }

    if (isOk) return body

    throw { ...body, statusCode: response.status }
  })
}
