import { useState } from 'react';

import { format } from 'date-fns';

import Calendar from 'react-calendar';

import {
  Flex,
  Heading,
  Stack,
  Text,
  Input,
  Textarea,
  Button,
  Image,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export const Appointment = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dataTest = format(date, 'yyyy-MM-dd');
    console.log(dataTest);
  }, [date]);

  return (
    <Stack
      background="gray.800"
      spacing={{ base: 8, md: 24 }}
      height="100vh"
      pl="8"
      pr="8"
      align="center"
    >
      <Flex direction="column" align="center" h="100%">
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
            Agendamento
            <Text as="span" color="orange.400">
              Fácil
            </Text>
          </Heading>
          <Text color="gray.300" maxW="3xl" fontSize={24}>
            Faça o agendamendo de seus compromissos e fique tranquilo.
          </Text>
        </Stack>

        <Stack spacing={32} direction="row" marginTop={14}>
          <Calendar onChange={setDate} value={date} />
          <Flex
            direction="column"
            align="center"
            justifyContent="space-between"
          >
            <Stack spacing={3}>
              <Input
                name="title"
                placeholder="Titulo"
                size="lg"
                colorScheme="whiteAlpha"
              />
              <Input
                name="hour"
                placeholder="Horário"
                type="time"
                size="lg"
                colorScheme="whiteAlpha"
              />
              <Textarea placeholder="Descrição" name="description" />
            </Stack>
            <Button
              rounded="full"
              px={12}
              height={16}
              colorScheme="orange"
              bg="orange.400"
              _hover={{ bg: 'orange.500' }}
            >
              Agendar
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
};
