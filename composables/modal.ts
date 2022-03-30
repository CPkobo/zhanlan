import type { Ref } from "nuxt3/dist/app/compat/capi";
export const closeModal = (company: Ref<CompanyInfo>) => () => {
    company.value.index = -1
    company.value.name = ''
    company.value.name_zh = ''
    company.value.category = ''
    company.value.summary = ''
    company.value.summary_zh = ''
    company.value.description = ''
    company.value.description_zh = ''
    company.value.mtg = ''
    company.value.website = ''
    company.value.imgs = []
}

export const openModal = (company: Ref<CompanyInfo>) => (info: CompanyInfo) => {
    company.value.index = info.index
    company.value.name = info.name
    company.value.name_zh = info.name_zh
    company.value.category = info.category
    company.value.summary = info.summary
    company.value.summary_zh = info.summary_zh
    company.value.description = info.description
    company.value.description_zh = info.description_zh
    company.value.mtg = info.mtg
    company.value.website = info.website
    company.value.imgs = info.imgs
}

const companyCard: CompanyInfo = {
    index: -1,
    name: '',
    name_zh: '',
    category: '',
    summary: '',
    summary_zh: '',
    description: '',
    description_zh: '',
    mtg: '',
    website: '',
    imgs: []
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