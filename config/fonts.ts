import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Roboto_Mono as FontRoboto,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});
