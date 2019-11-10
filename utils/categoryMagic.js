const categories = [
  { id: 1, name: 'Blogg', slug: 'blogg' },
  { id: 39, name: 'Nye norske utgivelser', slug: 'nye-norske-utgivelser' },
  { id: 40, name: 'Utenlandske utgivelser', slug: 'utenlandske-utgivelser' },
  { id: 41, name: 'Eldre norske utgivelser', slug: 'eldre-norske-utgivelser' }
]

export function getCategory (slug) {
  return categories.find(cat => cat.slug === slug)
}
