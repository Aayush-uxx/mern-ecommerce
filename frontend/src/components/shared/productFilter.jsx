const ProductFilters = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h3 className="font-bold mb-3">Filters</h3>

      {/* Brand Filter */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Brand</h4>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Apple
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Samsung
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Xiaomi
        </label>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Size</h4>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border px-3 py-1 rounded hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Price Range</h4>
        <select className="border rounded p-2 w-full">
          <option>Under ₹500</option>
          <option>₹500 - ₹1000</option>
          <option>₹1000 - ₹5000</option>
          <option>Above ₹5000</option>
        </select>
      </div>
    </div>
  );
};
export default ProductFilters;
