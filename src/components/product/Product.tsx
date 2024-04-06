import React from "react";
import product from "../../assets/images/product1.png";
function Product() {
  return (
    <div className="flex flex-col gap-3">
      <img src={product} className="w-full rounded-lg" alt="" />
      <h4 className="text-kernel md:text-lg lg:text-xl">Filli Tea </h4>
      <p className="text-main_color">AED 0</p>
    </div>
  );
}

export default Product;
