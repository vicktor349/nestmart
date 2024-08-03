import { CartProvider } from "@/components/CartContext";
import Layout from "@/components/Layout";
import { UserProvider } from "@/components/userContext";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps })
{
  return (
    <div>
      <CartProvider>
        <UserProvider>
          <MantineProvider>
            <Notifications />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MantineProvider>
        </UserProvider>
      </CartProvider>
    </div>
  );
}
