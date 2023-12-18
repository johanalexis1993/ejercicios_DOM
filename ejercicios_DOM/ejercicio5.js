const ulNew = document.createElement('ul')
document.body.append(ulNew)
const ulOfLi = document.querySelector('ul')
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
albums.forEach((pep) => {
  const paragraph = document.createElement('li')
  paragraph.textContent = pep
  ulOfLi.appendChild(paragraph)
})
