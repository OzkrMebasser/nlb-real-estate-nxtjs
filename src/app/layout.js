import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script'

// import ContactButtons from "./components/ContactButtons/ContactButtons";
import ActionButtons from "./components/ContactButtons/ActionButtons";
import PromoModal from "./components/PromoModal/PromoModal";
// import NavBar from "./components/NavBar/NavBar';
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";
import LanguageProvider from "../context/LanguageProvider";
// import LanguageSelector from './components/LanguageSelector/LanguageSelector'
import { PropertiesProvider } from "../context/PropertiesProvider";
import { QuestionsProvider } from "../context/QuestionProvider";
import "react-slideshow-image/dist/styles.css";
import { ModalProvider } from "@/context/ModalProvider";
import { PostsProvider } from "@/context/PostsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NLB Real Estate",
  description: "Your money in good hands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="tDyU-6XXNqYRmCnaP0g_ck1MBaxk2XiPB75LXa_9Vfg" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css"
          rel="stylesheet"
        />
      </head>
        
      <body suppressHydrationWarning={true} className={inter.className}>
        <ModalProvider>
          <PromoModal />
          <LanguageProvider>
            {/* <LanguageSelector/> */}
            <PropertiesProvider>
              <QuestionsProvider>
                <PostsProvider> 
                <Nav />

                {children}

                {/* <ContactButtons /> */}
                <ActionButtons />
                <Footer />
                </PostsProvider>
              </QuestionsProvider>
            </PropertiesProvider>
          </LanguageProvider>
        </ModalProvider>
   
      </body>
    </html>
  );
}
