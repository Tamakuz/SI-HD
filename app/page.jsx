import State from "@/components/state/component";
import {
  Box,
  ChakraProvider,
  Flex,
  Stack,
  Text,
  extendTheme,
} from "@chakra-ui/react";
import ListPasien from "@/components/list_pasien/component";
import Navigation from "@/components/navigation_bottom/component";

export default function Home() {

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
          <State />
        </Stack>

        <Stack className="sm:px-60 px-5">
          <Text className="font-bold text-xl">Daftar Pasien</Text>
          <ListPasien />
        </Stack>

        <Navigation />
      </Box>
    </ChakraProvider>
  );
}
