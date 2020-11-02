function jsxDemo(_, {slots, attrs, emit}) {
  return <button onClick={() => console.log('hello, first tsx component')}>
    Click Jsx Button
  </button>
}

export default jsxDemo