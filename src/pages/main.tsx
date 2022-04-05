export function Main() {
  const [count, setCount] = useState(0)
  return (
    <button
      className="flex items-center rounded bg-blue-100 py-1 px-4 font-medium transition hover:bg-blue-300"
      onClick={() => setCount(count + 1)}
      type="button"
    >
      <span>Count: {count}</span>
      <div className="i-carbon-chevron-right ml-1 print:hidden" />
    </button>
  )
}
