import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const localTime = time.toLocaleString();
  
  return (
    <Box textAlign="center">
      <Text fontSize="xl" fontWeight="light">{localTime}</Text>
    </Box>
  );
}

export default Clock;