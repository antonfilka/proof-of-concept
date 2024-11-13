"use client";
import { useState, useEffect, useRef } from "react";

export default function FlexPlayground() {
  const [items, setItems] = useState([
    { id: 1, grow: 1, shrink: 1, basis: 100, width: 100 },
  ]);

  const [containerWidth, setContainerWidth] = useState(800); // Adjustable container width
  const containerRef = useRef<HTMLDivElement>(null);

  const updateWidths = () => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      const updatedItems = Array.from(elements).map((element, index) => {
        const newWidth = element.getBoundingClientRect().width;
        if (items[index].width !== newWidth) {
          return { ...items[index], width: newWidth };
        }
        return items[index]; // Return unchanged item if the width hasn't changed
      });
      setItems(updatedItems);
    }
  };

  useEffect(() => {
    updateWidths(); // Initial width calculation after mounting and container width change
  }, [containerWidth]);

  useEffect(() => {
    // Rerun the width calculation when items change (add/remove/update)
    updateWidths();
  }, [items.length]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, grow: 1, shrink: 1, basis: 100, width: 100 },
    ]);
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleChange = (id: number, key: string, value: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [key]: value } : item)),
    );
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl mb-6 text-center">Flexbox Playground</h1>

      {/* Preview Section */}
      <div className="flex-1 mb-6">
        <h2 className="text-xl mb-4">Preview</h2>
        <label className="block mb-4">
          <span className="text-sm">Container Width: {containerWidth}px</span>
          <input
            type="range"
            min="200"
            max="1200"
            value={containerWidth}
            onChange={(e) => setContainerWidth(+e.target.value)}
            className="w-full"
          />
        </label>
        <div
          className="box-border border-gray-300 bg-white overflow-hidden"
          style={{ width: `${containerWidth}px` }}
        >
          <div
            className="flex bg-gray-200"
            ref={containerRef} // Reference to container
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="box-border flex items-center justify-center text-white h-[20px]"
                style={{
                  flexGrow: item.grow,
                  flexShrink: item.shrink,
                  flexBasis: `${item.basis}px`,
                  backgroundColor: getRandomColor(),
                }}
              >
                <p className="p-2">Item {item.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl mb-4">Controls</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
          onClick={handleAddItem}
        >
          Add Item
        </button>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded-md">
              <h3>Item {item.id}</h3>
              <label className="block">
                <span className="text-sm">Flex Grow</span>
                <input
                  type="number"
                  value={item.grow}
                  onChange={(e) =>
                    handleChange(item.id, "grow", +e.target.value)
                  }
                  className="border p-2 w-full"
                />
              </label>
              <label className="block mt-2">
                <span className="text-sm">Flex Shrink</span>
                <input
                  type="number"
                  value={item.shrink}
                  onChange={(e) =>
                    handleChange(item.id, "shrink", +e.target.value)
                  }
                  className="border p-2 w-full"
                />
              </label>
              <label className="block mt-2">
                <span className="text-sm">Flex Basis (px)</span>
                <input
                  type="number"
                  value={item.basis}
                  onChange={(e) =>
                    handleChange(item.id, "basis", +e.target.value)
                  }
                  className="border p-2 w-full"
                />
              </label>
              <button
                className="text-red-500 mt-2"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
