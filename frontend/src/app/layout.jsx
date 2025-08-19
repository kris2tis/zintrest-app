import vazirFont from "@/constants/localFont";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import AuthProvider from "context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable}`}>
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
