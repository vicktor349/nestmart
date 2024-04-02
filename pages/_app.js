import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps })
{
  return (
    <div className="ssm:mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-48 font-Montserrat max-w-screen-2xl">
      <MantineProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </div>
  );
}
