import "./globals.css";

export const metadata = {
  title: "Kathy's Programmer Profile | A Little Cat, A Lot of Code!",
  description:
    "Meet Kathy, a BSIT student majoring in Network Design Management, in her cute pink and yellow cat-themed portfolio."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
