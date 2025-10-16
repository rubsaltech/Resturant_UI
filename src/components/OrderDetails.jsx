import React from "react";

const OrderDetails = () => {
  const orderTypes = [
    { name: "Dine In", active: true },
    { name: "Takeout", active: false },
    { name: "Curbside", active: false }
  ];

  const orderItems = [
    {
      category: "Appetizer",
      name: "Cheese Selection",
      price: "$12.00"
    },
    {
      category: "Main Course",
      name: "Meat Balls", 
      price: "$12.00",
      modifications: ["No Shrimp", "Extra Chicken", "Medium Rare"]
    },
    {
      category: "Dessert",
      name: "Almond Crusted Salmon",
      price: "$21.00",
      modifications: ["Salad", "Balsamic Vinaigrette", "Medium Rare"]
    }
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
        
        {/* Customer Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              IE
            </div>
            <div>
              <p className="font-semibold text-gray-900">Johnson Mitchell</p>
              <p className="text-xs text-gray-500">TUE, JULY 2024 00:00PM</p>
              <p className="text-xs text-gray-500">+1(415) 123 4567</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3z" clipRule="evenodd"/>
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4zm11 16V5H5v14h10z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Order Items (scrollable) */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {orderItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                </div>
                <span className="text-green-600 font-semibold">{item.price}</span>
              </div>
              {item.modifications && (
                <div className="flex flex-wrap gap-1">
                  {item.modifications.map((mod, modIndex) => (
                    <span
                      key={modIndex}
                      className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Billing Summary */}
      <div className="border-t border-gray-200 p-4">
        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span>Sub Total:</span>
            <span>$62.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>$00.00</span>
          </div>
          <div className="flex justify-between">
            <span>Service Charge:</span>
            <span>$00.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span>$0.50</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-2">
            <span>Total:</span>
            <span>$68.50</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex space-x-2">
            <button className="flex-1 bg-green-100 text-green-800 py-2 rounded-lg font-medium hover:bg-green-200 transition">
              Print
            </button>
            <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
              Fire
            </button>
          </div>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition">
            Charge $68.50
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
