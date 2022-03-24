import type { Ref } from "nuxt3/dist/app/compat/capi";
export const closeModal = (company: Ref<CompanyInfo>) => () => {
    company.value.name = ''
    company.value.category = ''
    company.value.description = ''
    company.value.website = ''
}

export const openModal = (company: Ref<CompanyInfo>) => (info: CompanyInfo) => {
    company.value.name = info.name
    company.value.category = info.category
    company.value.description = info.description
    company.value.website = info.website
}

const companyCard: CompanyInfo = {
    name: '',
    category: '',
    description: '',
    website: '',
}

export const useCompany = () => {
    const value = useState<CompanyInfo>('company', () => companyCard)
    return {
        state: readonly(value),
        close: closeModal(value),
        open: openModal(value)
    }
}

export const useModal = () => {
    return useState<boolean>("modal", () => false)
}

// export const useModal = () => {
//     return useState<boolean>('modal', () => false)
// }

// export const useInquiring = () => {
//     return useState<string>('company', () => "")
// }