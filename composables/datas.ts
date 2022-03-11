const data: AncestorTile[] = [
  {
    size: "is-3",
    parents: [
      {
        type: "is-vertical",
        children: [
          {
            src: "cat.jpg",
            company: "ゴールデンブリッジ"
          },
          {
            src: "cat.jpg",
            company: "日中経済貿易センター"
          },
          {
            src: "cat.jpg",
            company: "ゴールデンブリッジ"
          },
        ]
      },
      {
        children: [
          {
            src: "cat.jpg",
            company: "ゴールデンブリッジ"
          }
        ]
      },
      {
        children: [
          {
            src: "cat.jpg",
            company: "日中経済貿易センター"
          }
        ]
      }
    ]
  }
]

export const useData = () => {
  return useState<AncestorTile[]>('data', () => data)
}