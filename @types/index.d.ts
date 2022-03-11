declare type TileSize = "is-1" | "is-2" | "is-3" | "is-4" | "is-5" | "is-6" | "is-7" | "is-8" | "is-9" | "is-10" | "is-11" | "is-12" | ""

declare interface ChildPict {
    size?: TileSize
    src: string
    company: string
}

declare interface ParentTile {
    size?: TileSize
    type?: "is-vertical"
    children: ChildPict[]
}

declare interface AncestorTile {
    size?: TileSize
    parents: ParentTile[]
}