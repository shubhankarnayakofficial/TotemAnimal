
import "./globals.css";
export const metadata = {
  title: "Totem Archetype",
  description: "Discover your guiding animal archetype"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F7F5F2] text-[#2B2B2B]">{children}</body>
    </html>
  );
}
