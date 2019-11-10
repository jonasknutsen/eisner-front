export function stripExcerpt (excerpt) {
  return excerpt.replace(/(<([^>]+)>)/ig, '').replace('&#8230; Read more &raquo;', '')
}
