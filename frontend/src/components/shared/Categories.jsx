import { FaMobile, FaLaptop, FaTshirt, FaApple } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <div className="text-center p-4 border rounded-lg hover:shadow-lg cursor-pointer">
        <FaMobile className="text-4xl mx-auto text-blue-600" />
        <p className="mt-2 font-semibold">Electronics</p>
      </div>

      <div className="text-center p-4 border rounded-lg hover:shadow-lg cursor-pointer">
        <FaTshirt className="text-4xl mx-auto text-green-600" />
        <p className="mt-2 font-semibold">Fashion</p>
      </div>
    </div>
  );
};
export default Categories;
