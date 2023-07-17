
import "./globals.css";
import { Inter } from "next/font/google";
// import ContactButtons from "./components/ContactButtons/ContactButtons";
import ActionButtons from "./components/ContactButtons/ActionButtons";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import {PropertiesProvider} from "../context/PropertiesContext";
import {QuestionsProvider} from "../context/QuestionContext"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NLB Real Estate",
  description: "Your money in good hands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css"
          rel="stylesheet"
        />
      </head>
      
      <body suppressHydrationWarning={true} className={inter.className}>
      <PropertiesProvider>
      <QuestionsProvider>
        {children}
          <NavBar />
          {/* <ContactButtons /> */}
          <ActionButtons/>
          <Footer />
          </QuestionsProvider>
        </PropertiesProvider>
      </body>
    </html>
  );
}
