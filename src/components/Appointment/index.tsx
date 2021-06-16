import { useState } from 'react';
import { format } from 'date-fns';
import { SubmitHandler, useForm } from 'react-hook-form';
import Calendar from 'react-calendar';

import {
  Flex,
  Heading,
  Stack,
  Text,
  Input,
  InputGroup,
  Textarea,
  Button,
} from '@chakra-ui/react';

type FormData = {
  title: string;
  hour: string;
  description: string;
};

export type AppointmentProps = {
  dateAppointment: string;
  title: string;
  hour: string;
  description: string;
};

export const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [appointment, setAppointment] = useState<AppointmentProps[]>([]);

  const { register, handleSubmit } = useForm();

  const createApoointment: SubmitHandler<FormData> = (values, e) => {
    const dateAppointment = format(date, 'yyyy-MM-dd');

    const newAppointment = {
      dateAppointment,
      ...values,
    };

    setAppointment([...appointment, newAppointment]);

    e?.target.reset();
  };

  console.log(appointment);

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
          py={{ base: 20, md: 18 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '8xl' }}
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

        <Stack
          as="form"
          onSubmit={handleSubmit(createApoointment)}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
          marginTop={14}
          align="center"
        >
          <Calendar onChange={setDate} value={date} />
          <Flex
            direction="column"
            align="center"
            justifyContent="space-between"
          >
            <InputGroup>
              <Input
                data-testid="title"
                {...register('title')}
                placeholder="Titulo"
                color="white"
                size="lg"
                colorScheme="whiteAlpha"
                marginRight="4"
                marginBottom="4"
              />
              <Input
                data-testid="hour"
                {...register('hour')}
                color="white"
                placeholder="Horário"
                type="time"
                size="lg"
                w={160}
                colorScheme="whiteAlpha"
              />
            </InputGroup>
            <Textarea
              data-testid="description"
              {...register('description')}
              marginBottom="4"
              placeholder="Descrição"
              color="white"
            />

            <Button
              rounded="8"
              type="submit"
              w="100%"
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
