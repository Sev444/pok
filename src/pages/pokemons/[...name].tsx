import { useRouter } from "next/router";

export default function Pokemon() {
  const router = useRouter();

  return (<div>{router.query.name}</div>)
}