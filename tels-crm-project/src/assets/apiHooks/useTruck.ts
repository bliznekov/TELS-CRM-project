import TruckType from "./../../types/truckType";
import useRequest from "./useRequest";

const URL =
    '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"&object_id=';

type ResponseType = {
    root: { result: { items: { 0: TruckType[] } } };
};

const defValue: ResponseType = {
    root: { result: { items: { 0: [] } } },
};

const usePost = (id: string | undefined) =>
    useRequest<ResponseType>(defValue, `${URL}${id}`);

export default usePost;
