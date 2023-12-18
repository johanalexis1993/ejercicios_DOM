const dentroDelDiv = (document.querySelector(
  'div[data-function="printHere"]'
).innerHTML = '<ul></ul>')
const ulOfLi = document.querySelector('ul')
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
places.forEach((pep) => {
  const paragraph = document.createElement('li')
  paragraph.textContent = pep
  ulOfLi.appendChild(paragraph)
})
