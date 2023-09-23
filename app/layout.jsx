import "./globals.css";
import { Ubuntu } from "next/font/google";

export const metadata = {
  title: "Portfolio VICO Nelson",
  description: "Portfolio Vico Nelson",
};

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
