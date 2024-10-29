import { Box, Card, Flex } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from '@/app/components';

const IssueDetailLoadingPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="10rem" />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card mt="4" className="prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueDetailLoadingPage;
