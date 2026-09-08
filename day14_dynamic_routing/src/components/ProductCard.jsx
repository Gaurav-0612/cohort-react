import { useNavigate } from "react-router";


const Products = ({ products }) => {
    const navigate=useNavigate();
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border">

      {/* Product Image */}
      <div className="h-60 flex items-center justify-center p-5 bg-gray-50">
        <img
        onClick={()=>navigate(`/detail/${products.id}`)}
          src={products.image}
          alt={products.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">

        {/* Category */}
        <p className="text-sm text-gray-500 capitalize">
          {products.category}
        </p>

        {/* Title */}
        <h2 className="font-semibold text-lg mt-1 line-clamp-2">
          {products.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500 text-lg">
            ★
          </span>

          <span className="font-medium">
            {products.rating.rate}
          </span>

          <span className="text-gray-500 text-sm">
            ({products.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">

          <p className="text-2xl font-bold text-green-600">
            ${products.price}
          </p>

          {
          <button>
            Add to Cart
          </button>
          }
        </div>

      </div>
    </div>
  );
};

export default Products;