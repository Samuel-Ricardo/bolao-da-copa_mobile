import { Heading, HStack, VStack, Text } from "native-base";
import { Participants } from "./Participants";
import { IPoolCardProps } from "./PoolCard";

export const Poolheader = (data:IPoolCardProps) => (
    <HStack
        w='full'
        h={20}
        bgColor='transparent'
        borderBottomWidth={1}
        borderBottomColor='gray.600'
        justifyContent='space-btween'
        alignItems="center"
        mb={3}
        p={4}
    >
        <VStack>
            <Heading color="white" fontSize="md" fontFamily="heading">
                {data.title}
            </Heading>

            <HStack>
                <Text color="gray.200" fontSize="xs" mr={1}>
                    Código:
                </Text>
                
                <Text color="gray.200" fontSize="xs" fontFamily="heading">
                    {data.code}
                </Text>
            </HStack>
        </VStack>
        <Participants
            count={data._count?.participants}
            participants={data.participants}
        />
    </HStack>
)
