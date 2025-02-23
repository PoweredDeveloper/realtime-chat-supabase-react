import { Box, Grid, GridItem } from "@chakra-ui/react";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="10px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
          Created by: Matvey Karyakin
        </GridItem>
      </Grid>
    </Box>
  );
}
