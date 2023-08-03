"use client";
import "../app/globals.css";
import WhatsappLogo from "./../../assests/whatsappicon.svg";
import QRCODE from "../../assests/Whatsapp QR Code.jpeg";
import { Poppins } from "next/font/google";
import Nav from "../../components/Home Components/Nav";
import Footer from "../../components/Home Components/Footer";
import { Metadata } from "next";
import store from "../.././redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

let persistor = persistStore(store);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />
          <div className="relative overflow-hidden">
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {children}
              </PersistGate>
            </Provider>
            <div className=" fixed   right-4 bottom-10 md:bottom-20  md:right-10 z-50">
              <Image
                src={WhatsappLogo}
                onClick={() => setOpenModal(!openModal)}
                height={100}
                width={100}
                alt=" Whatsapp Logo"
                className=" z-50 w-[60px] md:w-[100px]  cursor-pointer  hover:scale-110 transition-all ease-linear duration-100 "
              />
            </div>
            <AnimatePresence>
            {openModal && (
              <motion.div
              initial={{opacity:0, x:100, }}
              animate={{opacity:1, x:0, }}
              exit={{opacity:0, x:100, }}
              transition={{ type:"spring"}} className=" space-y-4  rounded-lg flex flex-col items-center fixed w-[200px]  right-4 bottom-28 lg:bottom-[200px] md:bottom-30 z-50 bg-[#242424] p-4">
                <Image
                  src={QRCODE}
                  alt="Carlos Castro Whastapp QR Code"
                  width={100}
                  height={100}
                  className=" z-50"
                />
                <p className=" text-white text-sm text-center">
                  {" "}
                  Scan the QR Code to contact me directly
                </p>
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
