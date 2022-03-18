/* eslint-disable no-unused-vars */
const people = [
  { name: 'John', cool: true, country: 'USA' },
  { name: 'Scott', cool: true, country: 'Canada' },
  { name: 'Jimmy', cool: false, country: 'Australia' }
]

people.forEach((person, index) => {
  console.table(index, person.name, person.cool, person.country)
})

function certify (name) {
  console.count(`Certifying doctor degree for ${name}`)
  return `Dr.${name}`
}
// certify('hari')
