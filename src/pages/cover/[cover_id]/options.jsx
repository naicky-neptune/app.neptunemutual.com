import Head from "next/head";
import { CoverOptions } from "@/components/pages/cover/coverOptions";

export default function Options() {
  return (
    <main>
      <Head>
        <title>Neptune Mutual</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CoverOptions />
    </main>
  );
}
