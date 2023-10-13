import NavBottom from "@/components/navigation_bottom/index";
import StateComponent from "@/components/state/index";
import ListPasienComponent from "@/components/list_pasien/index";
import {
  Box,
  ChakraProvider,
  Flex,
  Stack,
  Text,
  extendTheme,
} from "@chakra-ui/react";

export default function Home() {
  const customTheme = extendTheme({
    styles: {
      global: {
        // Hilangkan warna latar belakang
        body: {
          bg: "none",
        },
      },
    },
  });

  return (
    <ChakraProvider>
      <Box>
        <Stack className="sm:px-60 px-5 sm:py-10 py-3">
          <Text className="font-bold text-3xl">Dasboard</Text>
          <Text className="text-gray-700">
            Hi, Jovan. Selamat datang di SI-HD
          </Text>
        </Stack>

        <Stack className="sm:px-60 px-5">
          <StateComponent />
        </Stack>

        <Stack className="sm:px-60 px-5">
          <Text className="font-bold text-xl">Daftar Pasien</Text>
          <ListPasienComponent />
        </Stack>

        <NavBottom />
      </Box>
    </ChakraProvider>
  );
}
