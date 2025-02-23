import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/appContext";
import NameForm from "./NameForm";

export default function Header() {
  const { username, setUsername } = useAppContext();

  return (
    <Grid
      templateColumns="max-content 1fr min-content"
      justifyItems="center"
      alignItems="center"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="20px solid #edf2f7"
    >
      <GridItem justifySelf="start" m="2">
        <Text textStyle='5xl' fontWeight="semibold" ml="2">Life чат!</Text>
      </GridItem>
      <GridItem justifySelf="end" alignSelf="end">
        <NameForm username={username} setUsername={setUsername} />
      </GridItem>
    </Grid>
  );
}
