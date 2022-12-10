import { Pressable, Row, Text } from "native-base";

interface IProps {
    code: string;
}

export function EmptyMyPoolList({code}:IProps){
  return (
    	<Row flexWrap="wrap" justifyContent="center" p={4}>
				<text color="gray.200" fontSize="sm">
					Esse bolão ainda não tem participantes, que tal
				</text>

				<Pressable onPress={() => {}}>
					<Text  textDecorationLine="underline" color="yellow.500" textDecoration="underline">
						Compartilhar o Código
					</Text>
				</Pressable>

				<Text color="gray.200" fontSize="sm" mx={1}>
					do bolão com alguém?
				</Text>
				
				<Text color="gray.200" mr={1}>
					Use o código
				</Text>

				<Text color="gray.200" fontSize="sm" textAlign="center" fontFamily="heading">
					{code}
				</Text>
      </Row>
  )
}