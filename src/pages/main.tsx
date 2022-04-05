export function Main() {
  const [count, setCount] = useState(0)
  return (
    <button
      className="flex items-center rounded bg-blue-100 py-1 px-4 dark:bg-blue-600"
      onClick={() => setCount(count + 1)}
      type="button"
    >
      <span>Count: {count}</span>
      <div className="i-carbon-chevron-right ml-1 print:hidden" />
    </button>
  )
}
