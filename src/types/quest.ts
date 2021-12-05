type Quest = {
  id:	number,
  title: string,
  description: string,
  previewImg: string,
  coverImg:	string
  type: string,
  level: string,
  peopleCount: {
    0: number,
    1: number,
  },
  duration: number,
}

export type { Quest }
