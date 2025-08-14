import { Stack } from 'expo-router';
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
import "@/global.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import "nativewind/tailwind.css";

const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider>
                <Stack>
                    <Stack.Screen name='index' options={{ title: "Shop" }} />
                    <Stack.Screen name='product/[id]' options={{ title: "Product" }} />
                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>

    );
}