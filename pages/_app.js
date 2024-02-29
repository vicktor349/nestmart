import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps })
{
  return (
    <div className="mx-24">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
