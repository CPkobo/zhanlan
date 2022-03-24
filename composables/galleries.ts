import companies from "./companies"

const data: GalleryData[] = [
  {
    src: "/pict/angang/1.jpg",
    company: companies["angang"]
  },
  {
    src: "/pict/angang/2.jpg",
    company: companies["angang"]
  },
  {
    src: "/pict/angang/3.jpg",
    company: companies["angang"]
  },
  {
    src: "/pict/angang/4.jpg",
    company: companies["angang"]
  },
  {
    src: "/pict/angang/5.jpg",
    company: companies["angang"]
  },

]

export const useGallery = () => {
  return useState<GalleryData[]>('gallery', () => data)
}