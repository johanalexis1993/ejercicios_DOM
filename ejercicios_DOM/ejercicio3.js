const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ulNew = document.createElement('ul')
document.body.append(ulNew)
const ulOfLi = document.querySelector('ul')
countries.forEach((pep) => {
  const paragraph = document.createElement('li')
  paragraph.textContent = pep
  ulOfLi.appendChild(paragraph)
})
document.querySelector('.fn-remove-me').remove()
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulNew2 = document.createElement('ul')
ulNew2.setAttribute('data-function', 'printHere')
document.body.append(ulNew2)
const ulOfLi2 = document.querySelector('ul[data-function="printHere"]')
cars.forEach((pep) => {
  const paragraph = document.createElement('li')
  paragraph.textContent = pep
  ulOfLi2.appendChild(paragraph)
})
let places = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
places.forEach((dato) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = dato.title
  const img = document.createElement('img')
  const button = document.createElement('button')
  button.textContent = 'Eliminar último'
  img.src = dato.imgUrl
  div.append(h4, img, button)
  document.body.appendChild(div)
})
const button = document.createElement('button')
button.textContent = 'Eliminar último'
document.body.appendChild(button)
button.addEventListener('click', () => {
  const divs = document.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1]
  if (lastDiv) {
    lastDiv.remove()
  }
})
