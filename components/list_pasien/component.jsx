"use client";
import { Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { BsFillPencilFill, BsInfoLg } from "react-icons/bs";
import { useGetData } from "@/hooks/useFetchting";
import BtnCreatePasien from "@/components/btn_create_pasien/component";

const ListPasien = () => {
  const apiUrls = "https://si-hd.vercel.app/api/pasien";
  const { datas, isLoading, error, refetchData } = useGetData(apiUrls);
  const [isRefetch, setIsRefetch] = useState(null)

  useEffect(() => {
    refetchData()
    setIsRefetch(null)
  }, [isRefetch])

  return (
    <>
      <BtnCreatePasien setIsRefetch={setIsRefetch} />
      <Box className="grid sm:grid-cols-3 sm:gap-5 gap-2">
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Data tidak bisa dimuat</Text>
        ) : (
          datas.map((data, index) => (
            <Flex
              key={index}
              className="bg-gray-100 px-3 py-7 w-full rounded-xl shadow-md justify-between items-center gap-2"
            >
              <Flex className="items-center gap-2">
                <FcBusinessman className="text-[70px]" />
                <Stack className="leading-3">
                  <Text className="font-bold">{data.nama}</Text>
                  <Text className="text-[14px] text-gray-700">
                    {data.status_pasien}
                  </Text>
                  <Text className="text-[14px] text-gray-700">
                    {data.rekam_medis}
                  </Text>
                </Stack>
              </Flex>
              <Stack>
                <IconButton
                  isRound={true}
                  icon={<BsInfoLg />}
                  variant="outline"
                  colorScheme="green"
                  size="sm"
                />
                <IconButton
                  isRound={true}
                  icon={<BsFillPencilFill />}
                  variant="outline"
                  colorScheme="yellow"
                  size="sm"
                />
              </Stack>
            </Flex>
          ))
        )}
      </Box>
    </>
  );
};

export default ListPasien;
