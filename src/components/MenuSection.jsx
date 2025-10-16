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
