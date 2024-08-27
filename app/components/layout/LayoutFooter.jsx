import { Box  , Container , Flex} from "@chakra-ui/react";

export default function Footer(){
    return(
        <Box as="footer" width="100%" py={2}>
            <Container maxW='4xl'>
               <Flex justifyContent="space-between">
                    <h2>Jeet Kasundra</h2>

               </Flex>
            </Container>
        </Box>
    )
}