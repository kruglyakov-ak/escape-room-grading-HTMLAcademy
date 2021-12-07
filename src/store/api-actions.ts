import { APIRoute } from "../const";
import { ThunkActionResult } from "../types/action";
import { OrderPost } from "../types/orderPost";
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

const postBookingOrderAction = (orderPost: OrderPost, onSuccess: () => void): ThunkActionResult =>
  async (_dispatch, _getState, api): Promise<void> => {
    try {
     await api.post(APIRoute.Orders, orderPost);
      onSuccess();
    } catch(err) {
      alert(err);
    }
  };

export {
  fetchQuestsAction,
  fetchQuestByIdAction,
  postBookingOrderAction
 }
