document.querySelector('div').innerHTML = '<div>hola soy un div</div>'
document.querySelector('.p').innerHTML = '<div><p>hola soy un "p"</p></div>'
const divNuevo = document.createElement('div')
divNuevo.className = 'miClase'
document.body.append(divNuevo)
const divContainer = document.querySelector('.miClase')
const pepArray = ['PEP 1', 'PEP 2', 'PEP 3', 'PEP 4', 'PEP 5', 'PEP 6']
pepArray.forEach((pep) => {
  const paragraph = document.createElement('p')
  paragraph.textContent = pep
  divContainer.appendChild(paragraph)
})
const pDinamico = document.createElement('p')
pDinamico.id = 'pDinamico'
document.body.append(pDinamico)
document.querySelector('#pDinamico').innerHTML = '<p>Soy dinamico</p>'
document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub'
const ulNew = document.createElement('ul')
document.body.append(ulNew)
const ulOfLi = document.querySelector('ul')
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
apps.forEach((pep) => {
  const paragraph = document.createElement('li')
  paragraph.textContent = pep
  ulOfLi.appendChild(paragraph)
})
const elements = document.getElementsByClassName('fn-remove-me')
while (elements.length > 0) {
  elements[0].parentNode.removeChild(elements[0])
}
const divNuevo1 = document.createElement('div')
divNuevo1.id = 'divNuevo1'
document.body.append(divNuevo1)
const padre = document.querySelector('#divNuevo1')
const div1 = document.createElement('div')
const p = document.createElement('p')
const div2 = document.createElement('div')
p.innerText = 'voy en medio entre dos divs'
padre.append(div1, p, div2)
document.querySelectorAll('section.fn-insert-here1').innerHTML =
  '<p>"Voy dentro!"</p>'
/*este ultimo no me funciona intente de todo pero no y ademas cambien tanto la etiqueta como el nombre de la clase porque la clese del h2 es la misma y pense que era por eso pero tampoco espero me respondas !gracias¡*/
