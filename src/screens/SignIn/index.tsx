import React from "react";
import { MaterialIcons } from '@expo/vector-icons'
import {
    Box,
    Center,
    Heading,
    Input,
    FormControl,
    Icon,
    Button,
    Checkbox,
    Text,
    HStack,
    VStack,
    WarningOutlineIcon,
    Image,
    Switch,
    useColorMode,


} from "native-base";


export function SingIn() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Center
            height="full"
            _dark={{ bg: 'black' }}
            _light={{ bg: 'white' }}
        >

            <Image

                size={300}
                source={require('../../../assets/login.png')}
                alt='foto do usuario'
                resizeMode="contain"
            />
            <VStack
                width='full'
                paddingX={"12"}
            >
                <Box width='full' >

                    <Heading
                        color='coolGray.700'
                        textAlign='center'
                        _dark={{ color: 'white' }}
                        _light={{ color: 'black' }}
                    >
                        Entrar
                    </Heading>


                    <FormControl isRequired>
                        <FormControl.Label>E-mail</FormControl.Label>
                        <Input
                            borderRadius={"full"}
                            placeholder='seu@email.com'
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name='person' />}
                                    size={5}
                                    ml={2}
                                    color={"muted.400"}
                                />
                            }
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size='xs' />} >

                            E-mail invalido
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isRequired>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            borderRadius={"full"}
                            placeholder='sua senha'
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name='lock' />}
                                    size={5}
                                    ml={2}
                                    color={"muted.400"}
                                />
                            }
                        />
                    </FormControl>

                    <Button
                        mt='7'
                    >
                        Entrar
                    </Button>

                    <HStack
                        mt={5}
                    >
                        <Checkbox
                            value="agree"
                        />
                        <Text ml={3}>
                            Lembrar senha
                        </Text>
                    </HStack>
                </Box>
                <HStack
                    borderBottomStyle="groove"
                    justifyContent='center'
                    alignItems='center'
                    borderColor='red.600'
                    mt='5'
                    space={10}
                >
                    <Text>Dark</Text>
                    <Switch
                        isChecked={colorMode === 'light'}
                        onToggle={toggleColorMode}
                        aria-label={
                            colorMode === 'light' ? 'troque para o tema escuro' : 'trooque para o tema claro'
                        }
                    />
                    <Text>Light</Text>
                </HStack>

            </VStack>


        </Center >
    )
}