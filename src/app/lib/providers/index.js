"use client"

import ProductsProvider from "@/context/ProductsProvider";


const Providers = ({children}) => {
    return (
        <ProductsProvider>
                {children}
        </ProductsProvider>
    );
};

export default Providers;