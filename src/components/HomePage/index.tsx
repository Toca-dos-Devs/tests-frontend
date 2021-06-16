import Link from 'next/link';

import {
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <HStack
      background="gray.800"
      spacing={{ base: 8, md: 24 }}
      height="100vh"
      pl="8"
      pr="8"
    >
      <Flex maxW="xl" direction="column" align="center" h="100%">
        <Stack
          textAlign="center"
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '6xl', md: '8xl' }}
            lineHeight="110%"
            color="white"
          >
            Agenda
            <Text as="span" color="orange.400">
              Fácil
            </Text>
          </Heading>
          <Text color="gray.300" maxW="3xl" fontSize={24}>
            Nunca perca uma reunião. Nunca se atrase para um também. Acompanhe
            suas reuniões e receba lembretes inteligentes nos momentos
            apropriados. Leia sua “Agenda Diária” inteligente todas as manhãs.
          </Text>
        </Stack>
        <Stack spacing={32} direction="row" marginTop={14}>
          <Link href="/scheduling" passHref>
            <Button
              rounded="full"
              px={12}
              height={16}
              colorScheme="orange"
              bg="orange.400"
              _hover={{ bg: 'orange.500' }}
            >
              Iniciar
            </Button>
          </Link>
          <Link href="/learnMore" passHref>
            <Button rounded="full" px={12} height={16}>
              Leia mais
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Flex w="full">
        <Flex alignItems="center">
          <Image src="/test.svg" w={702} h={448} alt="Image schedule" />
        </Flex>
      </Flex>
    </HStack>
  );
};
