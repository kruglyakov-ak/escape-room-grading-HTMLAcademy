import { DifficultylevelType, QuestType } from "../const"

type Quest = {
  id:	number,
  title: string,
  description: string,
  previewImg: string,
  coverImg:	string
  type: QuestType,
  level: DifficultylevelType,
  peopleCount: number[],
  duration: number,
}

export type { Quest }
