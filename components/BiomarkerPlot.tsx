import { BiomarkerData } from '../domain/model'
import { Box, Flex } from '@chakra-ui/react'

export const BiomarkerPlot: React.FC<{ data: BiomarkerData }> = ({ data }) => {
    const { customersValue, lowerNorm, upperNorm, biomarker } = data
    const customerRelativeToOptimum =
        (customersValue.value - lowerNorm.value) /
        (upperNorm.value - lowerNorm.value)
    const offset = `${customerRelativeToOptimum * 100}%`
    console.log(offset)

    return (
        <Flex gap={2}>
            <Box w="150px">{biomarker}</Box>
            {/* <div>{customerRelativeToOptimum}</div> */}
            <Flex grow="1">
                <Box bg="red.50" w={0.2}></Box>
                <Flex w={0.6} position="relative">
                    <Box bg="green.200" flexGrow={1}></Box>
                    <Box bg="teal.200" flexGrow={1}></Box>
                    <Box bg="blue.200" flexGrow={1}></Box>
                    <Flex
                        position="absolute"
                        h="100%"
                        alignItems="center"
                        left={offset}
                    >
                        <Box
                            transform="translate(-50%,0)"
                            position="relative"
                            bg="red"
                            borderRadius="full"
                            w="10px"
                            h="10px"
                        ></Box>
                    </Flex>
                </Flex>
                <Box bg="red.50" w={0.2}></Box>
            </Flex>
        </Flex>
    )
}
