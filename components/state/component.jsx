import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FcBarChart } from "react-icons/fc";

const State = () => {
  return (
    <Box className="grid sm:grid-cols-4 grid-cols-2 sm:gap-5 gap-2 justify-center items-center py-5">
      <Flex className="bg-gray-100 px-3 py-7 w-full rounded-xl shadow-md justify-center items-center gap-2">
        <FcBarChart className="text-[50px]" />
        <Stack className="leading-3">
          <Text className="text-center font-bold">75</Text>
          <Text className="text-[14px] text-gray-700">Total pasien</Text>
        </Stack>
      </Flex>
      <Flex className="bg-gray-100 px-3 py-7 w-full rounded-xl shadow-md justify-center items-center gap-2">
        <FcBarChart className="text-[50px]" />
        <Stack className="leading-3">
          <Text className="text-center font-bold">75</Text>
          <Text className="text-[14px] text-gray-700">Total pasien</Text>
        </Stack>
      </Flex>
      <Flex className="bg-gray-100 px-3 py-7 w-full rounded-xl shadow-md justify-center items-center gap-2">
        <FcBarChart className="text-[50px]" />
        <Stack className="leading-3">
          <Text className="text-center font-bold">75</Text>
          <Text className="text-[14px] text-gray-700">Total pasien</Text>
        </Stack>
      </Flex>
      <Flex className="bg-gray-100 px-3 py-7 w-full rounded-xl shadow-md justify-center items-center gap-2">
        <FcBarChart className="text-[50px]" />
        <Stack className="leading-3">
          <Text className="text-center font-bold">75</Text>
          <Text className="text-[14px] text-gray-700">Total pasien</Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default State;
