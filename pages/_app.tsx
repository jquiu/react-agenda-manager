import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/router";

import { fontSans, fontMono, fontRoboto } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  roboto: fontRoboto.style.fontFamily,
};