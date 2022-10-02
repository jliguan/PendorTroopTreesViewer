import { Center, Loader } from "@mantine/core";

export default function LoadingScreen() {
  return (
    <Center style={{ height: '100%'}}>
        <Loader size="xl"/>
    </Center>
  );
}