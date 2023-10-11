/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex bg-slate-200 min-h-[100vh] overflow-hidden">
      {/* sidebar */}
      <div>
        <Sidebar />
      </div>
      {/* sidebar end */}

      {/* header, and main */}
      <div className="w-full">
        <nav>
          <Header />
        </nav>
        <main className="h-[90vh]">{children}</main>
        <footer className="fixed bottom-0 pl-5 h-[4vh] bg-white w-full leading-[4vh]">
          Copyright Pokemon &copy; 2023
        </footer>
      </div>
      {/* header, and main end */}
    </div>
  );
}

export default Layout;
