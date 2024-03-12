import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps })
{
  return (
    <div className="mx-28">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
