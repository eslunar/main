


/*range*/


return function input(type = "", attr = {}) {
  const el = new Element(`<input type="${type}">`).attr(attr)
  return el
}
