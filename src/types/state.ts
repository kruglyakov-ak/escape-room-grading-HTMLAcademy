import { QuestType } from "../const"
import { Quest } from "./quest"

type State = {
  quests: Quest[],
  currentQuest: Quest | null,
  currentSortType: QuestType,
}

export type { State }
