
const test = (): string => {
  let asdf = '';

  new Promise((resolve) => {
    setTimeout(() => resolve(asdf = 'asdf'), 2000)
  })

  return asdf
} 

 
const Test = () => {
  let haha = test();

  return (
    <h1>{haha}</h1>
  )
}

export default Test
