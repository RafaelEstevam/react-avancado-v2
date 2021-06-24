type Props = {
  title: string
}

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}
