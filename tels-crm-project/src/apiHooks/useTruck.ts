import TruckType from "../types/truckType";
import useRequest from "./useRequest";

const URL =
    '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"&object_id=';

// Совсем тут запутался, не могу выьянуть отсюда данные в компонент TruckCard, чтобы отслеживать его по id

const defValue: TruckType[] = [{}];

const useTrucks = (id: string | undefined) =>
    useRequest<TruckType[]>(defValue, `${URL}${id}`);

export default useTrucks;
