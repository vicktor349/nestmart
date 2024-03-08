import BestSales from "@/components/BestSales";
import Deals from "@/components/Deals";
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
        <BestSales />
        <Deals />
      </div>
    </>
  );
}
