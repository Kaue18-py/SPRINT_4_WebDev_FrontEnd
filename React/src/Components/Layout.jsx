import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useScrollToHash from "../hooks/useScrollToHash";

export default function Layout() {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
