import TruckType from "../types/truckType";
import useRequest from "./useRequest";

// const token = "c5da23c0-5569-4707-9e4a-d4d3777222a8";
// const login = "t802_bra";
// const pass = "onsta234";

const URL =
    '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"&get_en_address="true"';

// Совсем тут запутался, не могу выьянуть отсюда данные в компонент TruckCard, чтобы отслеживать его по id

const defValue: TruckType[] = [{}];

const usePost = () => useRequest<TruckType[]>(defValue, `${URL}`);

export default usePost;
