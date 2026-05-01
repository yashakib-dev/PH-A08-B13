import { FaArrowRightLong, FaRegStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
const ProductsCards = ({ products, loading }) => {
  return (
    <div className="my-20 container lg:w-full w-[90%] mx-auto space-y-6">
      <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold ">
        Popular <span className="text-[#FF7B24]">Products</span>
      </h2>
      <p className="text-lg text-black/80">
        Handpicked bestsellers for this summer season
      </p>
      <div className="container mx-auto  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8">
        {loading ? (
            <div className="flex justify-center h-[20vw] w-[80vw]  "><span className="loading  w-15 loading-spinner loading-xl"></span></div>
          
        ) : (
          products.slice(0, 3).map((product) => {
            return (
              <div
                key={product.id}
                className="card mt-10 shadow-sm border border-gray-200"
              >
                <figure>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full  h-85 "
                  />
                </figure>
                <div className="card-body">
                  <p className="text-[#FF7B24] font-medium">{product.brand}</p>
                  <h2 className="card-title text-xl">{product.name}</h2>

                  <div className="flex text-md font-medium border-t py-3 border-black/30 border-dashed ">
                    <p className="text-2xl font-bold">${product.price}</p>
                    <div className="w-fit flex items-center gap-2 ">
                      <p>{product.rating}</p>
                      <FaRegStar className="h-5 w-5" />
                    </div>
                    <Link href={`/product-details/${product.id}`} className="btn rounded-3xl font-bold text-[white] bg-[#FF7B24] ml-4">
                      View Details <FaArrowRightLong></FaArrowRightLong>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
        <div className="flex justify-center ">
          <button className="btn bg-black h-12 rounded-3xl text-white mt-5 hover:bg-[#FF7B24] w-60">View All Products<FaArrowRightLong></FaArrowRightLong></button>
        </div>
      
    </div>
  );
};

export default ProductsCards;
