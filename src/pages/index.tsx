import { AiFillCaretRight } from 'react-icons/ai'

export default function IndexPage() {
  const [input, setInput] = useState('')

  const navigate = useNavigate()
  return (
    <>
      <input
        className="my-2 border-b-2 border-neutral-600 bg-transparent transition focus:border-blue-400 focus:outline-none dark:border-neutral-200"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Your name"
        value={input}
      />
      <button
        className="flex items-center rounded bg-blue-100 px-4 py-1 font-bold transition disabled:opacity-40 dark:bg-blue-600 print:hidden"
        disabled={!input}
        onClick={() => navigate(`/hi/${input}`)}
        type="button"
      >
        <span>Go</span>
        <AiFillCaretRight className="ml-1 print:hidden" />
      </button>
    </>
  )
}
