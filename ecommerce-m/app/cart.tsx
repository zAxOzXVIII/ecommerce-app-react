import { View, FlatList } from "react-native"
import { useCart } from "@/store/cartStore";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import {Text} from '@/components/ui/text';
import { ButtonText, Button } from "@/components/ui/button";

export default function CartScreen() {
    const items = useCart((state) => state.items);
    const resetCart = useCart(state => state.resetCart);

    console.log(items);
    const onCheckout = async () =>{
        resetCart();
    }

    return (
        <FlatList
            data={items}
            contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto"
            renderItem={({ item }) => (
                <HStack className="bg-white p-3">
                    <VStack space="sm">
                        <Text bold className="">{item.product.name}</Text>
                        <Text className="">${item.product.price}</Text>
                    </VStack>
                    <Text className="ml-auto">{item.quantity}</Text>
                </HStack>
            )}
            ListFooterComponent={()=>(
                <Button onPress={onCheckout}>
                    <ButtonText>Chekout</ButtonText>
                </Button>
            )}
        />
    );
}