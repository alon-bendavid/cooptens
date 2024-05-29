import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import qs from "query-string";
// import { useCategoriesQuery } from "@/graphql/generated/schema";

export default function Header() {
  const router = useRouter();

  // const { data } = useCategoriesQuery();
  // // const categories = data?.categories || [];

  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   if (typeof router.query.title === "string") {
  //     setSearch(router.query.title);
  //   }
  // }, [router.query.title]);

  // const searchParams = qs.parse(window.location.search) as any;

  return (
<header className="bg-slate-800 text-white">
<div>

  <h1  >header</h1>
</div>

</header>
  );
}
