export default function HiPage() {
  const { name } = useParams<{ name: string }>()
  return <div>Hello {name}</div>
}
