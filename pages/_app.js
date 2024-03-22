import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps })
{
  return (
    <div className="ssm:mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-48 font-Roboto">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
