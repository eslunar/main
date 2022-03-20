app.repeat=function Repeat(func, count = 0) {
  let val;
  for (let i = 0; i < count; i++) {
    val = func(i, val)
  }
  return this
}