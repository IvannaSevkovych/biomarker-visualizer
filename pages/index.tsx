import { Input, Button, Flex, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { BiomarkerData } from '../domain/model'
import { BiomarkerPlot } from '../components/BiomarkerPlot'

export default function Home() {
    const [biomarker, setBiomarker] = useState('')
    const [customersValue, setCustomersValue] = useState(undefined)
    const [lowerNorm, setLowerNorm] = useState(undefined)
    const [upperNorm, setUpperNorm] = useState(undefined)

    const [biomarkers, setBiomarkers] = useState<BiomarkerData[]>([
        {
            biomarker: 'test',
            customersValue: { value: 4 },
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

    return (
        <div>
            <Stack gap={1}>
                {biomarkers.map((data: BiomarkerData) => {
                    return (
                        <BiomarkerPlot
                            key={data.biomarker}
                            data={data}
                        ></BiomarkerPlot>
                    )
                })}
            </Stack>
            <Flex gap={3}>
                <Input
                    type="text"
                    placeholder="biomarker"
                    value={biomarker}
                    onChange={(e) => setBiomarker(e.target.value)}
                />
                <Input
                    type="number"
                    step="any"
                    placeholder="customersValue"
                    value={customersValue || ''}
                    onChange={(e) => setCustomersValue(e.target.value)}
                />
                <Input
                    type="number"
                    step="any"
                    placeholder="lowerNorm"
                    value={lowerNorm || ''}
                    onChange={(e) => setLowerNorm(e.target.value)}
                />
                <Input
                    type="number"
                    step="any"
                    placeholder="upperNorm"
                    value={upperNorm || ''}
                    onChange={(e) => setUpperNorm(e.target.value)}
                />
            </Flex>
            <Button marginY={3} colorScheme="blue" onClick={addBiomarker}>
                +
            </Button>
        </div>
    )
}
