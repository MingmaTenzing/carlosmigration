"use client"
import "../app/globals.css";

import { Poppins } from "next/font/google";
import Nav from "../../components/Home Components/Nav";
import Footer from "../../components/Home Components/Footer";
import { Metadata } from "next";
import store from "../.././redux/store"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />
          <div>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor} >
              {children}
              </PersistGate>
              </Provider>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
