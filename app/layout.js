import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Responsive Layout",
  description: "For Atg for responsive layout with using bootstap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <Navbar></Navbar> 
        {children}
        
      </body>
    </html>
  );
}
