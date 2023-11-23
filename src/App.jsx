import { useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constants";
import { Sidebar } from "./components/Sidebar";
import { CartElement } from "./components/CartElement";
import { BiSun, BiMoon } from "react-icons/bi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsection items={SHOE_LIST} />
      <Sidebar isOpen={isSidebarOpen} setClose={setIsSidebarOpen}>
        <h2 className="font-bold text-2xl mb-10 dark:text-white">Cart</h2>
        {SHOE_LIST.map((item) => (
          <CartElement key={item.id} item={item} />
        ))}
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 text-white  rounded-full px-4 py-2 dark:bg-white dark:text-night"
        >
          <BiMoon className="hidden dark:block" />
          <BiSun className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
