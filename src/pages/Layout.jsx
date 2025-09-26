import React from "react";
import Sidebar from "../components/Sidebar";
import MenuSection from "../components/MenuSection";
import OrderDetails from "../components/OrderDetails";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Menu */}
      <div className="flex-1 bg-white">
        <MenuSection />
      </div>

      {/* Right Sidebar (Order List) */}
      <div className="w-80 border-l border-gray-200">
        <OrderDetails />
      </div>
    </div>
  );
};

export default Layout;
