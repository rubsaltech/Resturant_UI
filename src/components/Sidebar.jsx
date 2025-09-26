import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Logo Section */}
      <div className="bg-green-100 p-4 flex items-center">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm font-bold">F</span>
        </div>
        <span className="text-green-800 font-bold text-lg">Foodlogo</span>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 p-4">
        <ul className="space-y-2">
          <li className="flex items-center p-3 rounded-md bg-green-100 text-green-800 cursor-pointer transition">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Menu
          </li>
          <li className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2v6h6V7H7z" clipRule="evenodd"/>
            </svg>
            Order List
          </li>
          <li className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            History
          </li>
          <li className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Bills
          </li>
          <li className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            </svg>
            Setting
          </li>
          <li className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 13a1 1 0 102 0 1 1 0 11-1.731 1 3 3 0 01-7.258 0 1 1 0 011.731-1A3 3 0 0110 7zm-9 4h.008v.008H1V11zm11.818-2H8.364V9H12.818V7zM7 14q.131.6-.046.828C7.338 15 6.451 15 6.451s.14-.624-.62-.828C5.062 13.787 7.297 13.765 7 14m4-4.146V7c0-.2-.162-.354-.36-.354H9.693a.353.353 0 00-.335.024.355.355 0 00-.133.337 2.4 2.4 0 00-.057.875c-.173-.438-.364-.846-.364-.846zM6 13a2 2 0 10-4 0 2 2 0 004 0zm3.682-5.182c-.724.724-.724 1.899 0 2.624l.9.9a1.889 1.889 0 002.624 0l1.87-.871a.688.688 0 00-.408-1.266L9.595 7.118 9.71 7a1.889 1.889 0 011.276-.532c.981 0 1.649.542 1.647 1.154 0 .423-.186.848-.444 1.107.775.775.775 2.034 0 2.808l-.9.9a2.033 2.033 0 01-2.808 0l-.87-1.87c-.379-.759-.379-1.661 0-2.42z" clipRule="evenodd"/>
            </svg>
            Help Center
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition">
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/>
          </svg>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
