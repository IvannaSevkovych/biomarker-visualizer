import { Input, Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { BloodVis } from '../domain/model'

export default function Home() {
    const [biomarker, setBiomarker] = useState('')
    const [customersValue, setCustomersValue] = useState(undefined)
    const [lowerNorm, setLowerNorm] = useState(undefined)
    const [upperNorm, setUpperNorm] = useState(undefined)

    // TODO add mini states for all forms
    const [bloodvizes, setBloodvizes] = useState([])

    function addBloodVis() {
        const bloodVis: BloodVis = {
            biomarker,
            customersValue: { value: customersValue },
            lowerNorm: { value: lowerNorm },
            upperNorm: { value: upperNorm },
        }
        setBloodvizes([...bloodvizes, bloodVis])
        setBiomarker('')
        setCustomersValue(undefined)
        setLowerNorm(undefined)
        setUpperNorm(undefined)
    }

    return (
        <div>
            <div>
                {bloodvizes.map((bloodviz: BloodVis) => {
                    return (
                        <div key={bloodviz.biomarker}>
                            <div>{bloodviz.biomarker}</div>
                            <div>{bloodviz.customersValue.value}</div>
                            <div>{bloodviz.lowerNorm.value}</div>
                            <div>{bloodviz.upperNorm.value}</div>
                        </div>
                    )
                })}
            </div>
            <Flex gap={3}>
                <Input
                    type="text"
                    placeholder="biomarker"
                    value={biomarker}
                    onChange={(e) => setBiomarker(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="customersValue"
                    value={customersValue}
                    onChange={(e) => setCustomersValue(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="lowerNorm"
                    value={lowerNorm}
                    onChange={(e) => setLowerNorm(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="upperNorm"
                    value={upperNorm}
                    onChange={(e) => setUpperNorm(e.target.value)}
                />
            </Flex>
            <Button marginY={3} colorScheme="blue" onClick={addBloodVis}>
                +
            </Button>
        </div>
    )
}
