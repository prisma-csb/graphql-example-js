const defaultPlaygroundQuery = `\
query {
  feed {
    id
    title
    published
    author {
      id
      name
      email
    }
  }
}`

module.exports = {
  defaultPlaygroundQuery,
}
