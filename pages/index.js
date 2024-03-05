import HeroBanner from "@/components/HeroBanner";
import Head from "next/head";


export default function Home()
{
  return (
    <>
      <Head>
        <title>Nest | Home</title>
      </Head>
      <div>
        <HeroBanner />
      </div>
    </>
  );
}
