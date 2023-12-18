const elements = document.getElementsByClassName('fn-remove-me')
while (elements.length > 0) {
  elements[0].parentNode.removeChild(elements[0])
}
