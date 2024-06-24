import { Flex, Text } from "@chakra-ui/react";
import { styles } from "./styles";

const RootContent = () => {
  return (
    <Flex sx={styles.wrapper}>
      <Text color='white'>Template for creating an application using react, rtk query, rsbuild,chakra ui</Text>
    </Flex>
  );
};

export default RootContent;
