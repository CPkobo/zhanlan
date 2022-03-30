// declare type TileSize = "is-1" | "is-2" | "is-3" | "is-4" | "is-5" | "is-6" | "is-7" | "is-8" | "is-9" | "is-10" | "is-11" | "is-12" | ""

// declare interface ChildPict {
//     size?: TileSize
//     src: string
//     company: string
// }

// declare interface ParentTile {
//     size?: TileSize
//     type?: "is-vertical"
//     children: ChildPict[]
// }

// declare interface AncestorTile {
//     size?: TileSize
//     parents: ParentTile[]
// }

declare type CategoryStr = "industrial" | "construct" | "food" | "medical" | "fashon" | ""

// declare interface GalleryData {
//     src: string
//     company: CompanyInfo
// }

declare interface CompanyImage {
    img: {
        url: string
        height: number
        width: number
    }
    alt: string
}

declare interface CompanyInfo {
    index: number
    name: string
    name_zh: string
    website: string
    category: CategoryStr
    summary: string
    summary_zh: string
    description: string
    description_zh: string
    mtg: string
    imgs: CompanyImage[]
}

// declare type CompanyBase = {
//     [key in CompanyNames]: CompanyInfo
// }

// declare interface CompanyModalCard extends CompanyInfo {
//     showModal: boolean
//     detailed: string
//     zoom: string
// }