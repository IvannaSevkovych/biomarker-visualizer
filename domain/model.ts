export type BloodValue = {
    value: number
    unit?: string
}

export type BloodVis = {
    biomarker: string
    customersValue: BloodValue
    lowerNorm: BloodValue
    upperNorm: BloodValue
}
