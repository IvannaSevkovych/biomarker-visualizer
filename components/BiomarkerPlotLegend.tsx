import { Box, Flex, Text } from '@chakra-ui/react'

export const BiomarkerPlotLegend = () => {
    return (
        <Flex gap={{ base: 0, lg: 2 }} pt={7}>
            <Text w={{ base: 0, lg: 200 }} />
            <Flex grow="1">
                <Flex w={0.2} flexDirection={'column'} alignItems={'stretch'}>
                    <Box bg="red.50" h={2}></Box>
                    <Text fontSize="xs" align="center" p={1} color="gray.500">
                        Ниже референса
                    </Text>
                </Flex>
                <Flex w={0.6} position="relative">
                    <Flex
                        flexGrow={1}
                        flexDirection={'column'}
                        alignItems={'stretch'}
                    >
                        <Box bg="green.200" h={2}></Box>
                        <Text
                            fontSize="xs"
                            align="center"
                            p={1}
                            color="gray.500"
                        >
                            Нижняя 1/3
                        </Text>
                    </Flex>
                    <Flex
                        flexGrow={1}
                        flexDirection={'column'}
                        alignItems={'stretch'}
                    >
                        <Box bg="teal.200" h={2}></Box>
                        <Text
                            fontSize="xs"
                            align="center"
                            p={1}
                            color="gray.500"
                        >
                            Средняя 1/3
                        </Text>
                    </Flex>
                    <Flex
                        flexGrow={1}
                        flexDirection={'column'}
                        alignItems={'stretch'}
                    >
                        <Box bg="blue.200" h={2}></Box>
                        <Text
                            fontSize="xs"
                            align="center"
                            p={1}
                            color="gray.500"
                        >
                            Верхняя 1/3
                        </Text>
                    </Flex>
                </Flex>
                <Flex w={0.2} flexDirection={'column'} alignItems={'stretch'}>
                    <Box bg="red.50" h={2}></Box>
                    <Text fontSize="xs" align="center" p={1} color="gray.500">
                        Выше референса
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
