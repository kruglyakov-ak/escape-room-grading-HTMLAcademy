import { APIRoute } from "../const";
import { ThunkActionResult } from "../types/action";
import { Quest } from "../types/quest";
import { loadQuestById, loadQuests } from "./actions";

const fetchQuestsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    dispatch(loadQuests(data));
  };

const fetchQuestByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Quest>(`${APIRoute.Quest}${id}`);
    dispatch(loadQuestById(data));
  };

export {
  fetchQuestsAction,
  fetchQuestByIdAction
 }
