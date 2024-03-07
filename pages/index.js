import FeaturedCategories from "@/components/FeaturedCategories";
import HeroBanner from "@/components/HeroBanner";
import PopularProducts from "@/components/PopularProducts";
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
        <FeaturedCategories />
        <PopularProducts />
      </div>
    </>
  );
}
