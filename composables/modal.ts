export const useModal = () => {
    return useState<boolean>('modal', () => false)
}

export const useInquiring = () => {
    return useState<string>('company', () => "")
}