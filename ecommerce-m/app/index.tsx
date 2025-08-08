import { View, FlatList, useWindowDimensions } from "react-native"
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
import { useBreakpointValue } from '../components/ui/utils/use-break-point-value';
import { useEffect } from "react";
import { listProducts } from "../api/products";


export default function HomeScreen(){
    // const {width} = useWindowDimensions();
    // const numColumns = width > 700 ? 3 : 2;
    // console.log("re-render");
    useEffect(()=>{
        listProducts();
    }, []);


    const numColumns = useBreakpointValue({
        default : 2,
        sm: 3,
        xl: 4,
    });
    return (
            <FlatList data={products} 
            key={numColumns}
            numColumns={numColumns} 
            className=""
            contentContainerClassName="bg-gray-300 max-w-[960px] gap-2 mx-auto w-full"
            columnWrapperClassName="gap-2"
            renderItem={({ item })=> <ProductListItem 
            product={item} /> }
            />
            
    );
}