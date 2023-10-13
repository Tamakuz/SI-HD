import { Box, Flex } from "@chakra-ui/react";
import { FcAcceptDatabase, FcAddDatabase, FcApproval, FcBarChart } from "react-icons/fc"

const index = () => {
  return (
    <Flex className="fixed bottom-0 left-1/2 -translate-x-1/2 py-4 px-4 justify-center">
      <Flex className="shadow-md py-3 px-5 w-fit rounded-xl gap-3 bg-gray-100">
        <Flex className="shadow p-2 rounded-xl bg-blue-100">
          <FcAcceptDatabase className="text-3xl" />
        </Flex>
        <Flex className="shadow p-2 rounded-xl bg-gray-100">
          <FcApproval className="text-3xl" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default index;
