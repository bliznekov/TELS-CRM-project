import TruckType from "../types/truckType";
import useRequest from "./useRequest";
import trucks from "./../jsonFiles/trucks/trucks.json";
import TrucksFilterType from "../component/trucks/TrucksFilterTypes";

// const token = "c5da23c0-5569-4707-9e4a-d4d3777222a8";
// const login = "t802_bra";
// const pass = "onsta234";

const URL =
    '?type=CURRENT_POSITION&token=c5da23c0-5569-4707-9e4a-d4d3777222a8&string="json"&get_en_address="true"';

const defValue: TruckType[] = [{}];

const useTrucks = ({ page, limit }: TrucksFilterType) => {
    const offset = limit * (page - 1);
    let trucksCut = trucks.slice(offset, offset + limit).join("|");
    let url = `${URL}&imei=${trucksCut}`;

    // if (truck) {
    //     url += `${URL}&name_filter=${truck}`;
    // }

    return useRequest<TruckType[]>(defValue, `${url}`);
};

export default useTrucks;
