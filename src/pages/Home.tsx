interface Props {
  user: string;
}

export default function Home({ user }: Props) {
  return (
    <div className="h-[10000px]">
      <h1>Home</h1>
      <h1>Halo {user}</h1>
    </div>
  );
}
