import {
    Input,
    Button,
    Flex,
    Stack,
    Container,
    Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BiomarkerData } from '../domain/model'
import { BiomarkerPlot } from '../components/BiomarkerPlot'
import { BiomarkerPlotLegend } from '../components/BiomarkerPlotLegend'

export default function Home() {
    const [biomarker, setBiomarker] = useState<string>('')
    const [customersValue, setCustomersValue] = useState<number | undefined>(
        undefined
    )
    const [lowerNorm, setLowerNorm] = useState<number | undefined>(undefined)
    const [upperNorm, setUpperNorm] = useState<number | undefined>(undefined)

    const [biomarkers, setBiomarkers] = useState<BiomarkerData[]>([
        {
            biomarker: 'test',
            customersValue: { value: 4 },
            lowerNorm: { value: 2 },
            upperNorm: { value: 5 },
        },
        {
            biomarker: 'test2',
            customersValue: { value: 1 },
            lowerNorm: { value: 2 },
            upperNorm: { value: 5 },
        },
    ])

    function addBiomarker() {
        const biomarkerData: BiomarkerData = {
            biomarker,
            customersValue: { value: customersValue || -1 },
            lowerNorm: { value: lowerNorm || -1 },
            upperNorm: { value: upperNorm || -1 },
        }
        setBiomarkers([...biomarkers, biomarkerData])
        setBiomarker('')
        setCustomersValue(undefined)
        setLowerNorm(undefined)
        setUpperNorm(undefined)
    }
    const biomarkersPresent = biomarkers.length > 0

    return (
        <Container maxW="container.xl" py={3}>
            <Heading as="h1" size="xl" mb={5}>
                Визуализация биомаркеров
            </Heading>
            <Stack gap={1} mb={biomarkersPresent ? 8 : 0}>
                {biomarkers.map((data: BiomarkerData) => {
                    return (
                        <BiomarkerPlot
                            key={data.biomarker}
                            data={data}
                        ></BiomarkerPlot>
                    )
                })}

                {biomarkersPresent && <BiomarkerPlotLegend />}
            </Stack>
            <Heading as="h2" size="md" mb={4}>
                Добавить новый маркер
            </Heading>
            <Flex
                flexDirection={'column'}
                gap={5}
                justifyContent="space-between"
                alignItems={'flex-end'}
            >
                <Flex gap={3} flexDirection={'column'} w={'100%'}>
                    <Input
                        type="text"
                        placeholder="Название биомаркера"
                        value={biomarker}
                        onChange={(e) => setBiomarker(e.target.value)}
                    />
                    <Input
                        type="number"
                        step="any"
                        placeholder="Ваше значение"
                        value={customersValue || ''}
                        onChange={(e) =>
                            setCustomersValue(Number(e.target.value))
                        }
                    />
                    <Input
                        type="number"
                        step="any"
                        placeholder="Нижний референс"
                        value={lowerNorm || ''}
                        onChange={(e) => setLowerNorm(Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        step="any"
                        placeholder="Верхний референс"
                        value={upperNorm || ''}
                        onChange={(e) => setUpperNorm(Number(e.target.value))}
                    />
                </Flex>
                <Button
                    colorScheme="blue"
                    onClick={addBiomarker}
                    w={'100%'}
                    maxWidth={'480px'}
                >
                    +
                </Button>
            </Flex>
        </Container>
    )
}
