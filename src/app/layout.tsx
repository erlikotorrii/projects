import Header from "@/components/Header";
import './globals.css';
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Cyberware Global Defence</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        />
      </body>
    </html>
  );
}
