import React from "react";
import Sidebar from "../components/Sidebar";
import MenuSection from "../components/MenuSection";
import OrderDetails from "../components/OrderDetails";
import MenuNav from "../components/navbar/MenuNav";

const Layout = () => {
  return (
    <div className="flex fixed h-screen w-screen overflow-hidden bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200 overflow-hidden">
        <Sidebar />
      </div>

      {/* Main Menu */}
      <div className="flex-1 bg-white min-h-0 overflow-hidden flex flex-col">
        <MenuNav />
        <div className="flex-1 min-h-0 overflow-y-auto">
          <MenuSection />
        </div>
      </div>

      {/* Right Sidebar (Order List) */}
      <div className="w-80 border-l border-gray-200 overflow-hidden">
        <OrderDetails />
      </div>
    </div>
  );
};

export default Layout;
