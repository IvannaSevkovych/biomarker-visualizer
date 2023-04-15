export type BloodValue = {
    value: number
    unit?: string
}

export type BiomarkerData = {
    biomarker: string
    customersValue: BloodValue
    lowerNorm: BloodValue
    upperNorm: BloodValue
}
