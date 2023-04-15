import { BiomarkerData } from '../domain/model'

export const BiomarkerPlot: React.FC<{ data: BiomarkerData }> = ({ data }) => {
    return (
        <div>
            <div>{data.biomarker}</div>
            <div>{data.customersValue.value}</div>
            <div>{data.lowerNorm.value}</div>
            <div>{data.upperNorm.value}</div>
        </div>
    )
}
