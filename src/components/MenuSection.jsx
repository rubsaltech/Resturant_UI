import React from "react";

const MenuSection = () => {
  const categories = [
    { name: "Bar", icon: "🍷", active: true },
    { name: "Food", icon: "🍽️", active: false },
    { name: "Wine", icon: "🍾", active: false },
    { name: "Soup", icon: "🍲", active: false },
    { name: "Pizzas", icon: "🍕", active: false },
    { name: "Fish", icon: "🐟", active: false },
  ];

  const menuItems = [
    {
      name: "Super Delicious Pizza",
      image: "🍕",
      price: "$12.00",
      highlighted: false
    },
    {
      name: "Super Delicious Chicken",
      image: "🍗",
      price: "$15.00", 
      highlighted: true
    },
    {
      name: "Super Delicious Burger",
      image: "🍔",
      price: "$8.50",
      highlighted: false
    },
    {
      name: "Super Delicious Chips",
      image: "🍟",
      price: "$5.50",
      highlighted: false
    },
    {
      name: "Super Delicious Salad",
      image: "🥗",
      price: "$7.00",
      highlighted: false
    },
    {
      name: "Super Delicious Pasta",
      image: "🍝",
      price: "$11.00",
      highlighted: false
    },
    {
      name: "Super Delicious Steak",
      image: "🥩",
      price: "$18.00",
      highlighted: false
    },
    {
      name: "Super Delicious Dessert",
      image: "🍰",
      price: "$6.00",
      highlighted: false
    }
  ];

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header with Search */}
      <div className="border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <svg className="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">John Deo</p>
              <p className="text-xs text-gray-500">Clocked in at 06:33AM</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
          </button>
          <div className="flex space-x-1">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Category Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Category</h2>
          <div className="flex items-center space-x-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex flex-col items-center p-3 rounded-full transition ${
                  category.active
                    ? 'bg-green-100 text-green-800 border-2 border-green-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl mb-1">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Special Menu Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Special Menu for you</h2>
          <div className="grid grid-cols-4 gap-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-4 cursor-pointer transition ${
                  item.highlighted
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-4xl mb-3">
                  {item.image}
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-2 truncate">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">{item.price}</span>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-green-600 transition">
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
