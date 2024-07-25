import Head from "next/head";
import Header from "./Header";
import { ReactNode } from "react";
import Footer from "./Footer";

export default function Layout({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle: string;
}) {
  return (
    <>
      <Head>
        <title>Cooptens | {pageTitle}</title>
        <meta name="description" content="ads website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <main className="main-content ">{children}</main>
      <Footer></Footer>
    </>
  );
}
