export function Main() {
  const [count, setCount] = useState(0)
  return (
    <button
      className="min-w-20 rounded bg-blue-100 py-1 transition hover:bg-blue-300"
      onClick={() => setCount(count + 1)}
      type="button"
    >
      {count}
    </button>
  )
}
