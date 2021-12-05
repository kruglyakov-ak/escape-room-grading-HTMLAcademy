import { Quest } from "./quest"

type State = {
  quests: Quest[],
  currentQuest: Quest | null,
}

export type { State }
