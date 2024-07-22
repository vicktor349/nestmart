import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps })
{
  return (
    <div>
      <MantineProvider>
        <Notifications />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </div>
  );
}
