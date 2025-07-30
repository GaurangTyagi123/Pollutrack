import { useQuery } from "@tanstack/react-query";
import { getLocation } from "../services/apiGeolocation";

function useLocation() {
    const { data: location, isPending,error } = useQuery({
        queryKey: ['location'],
        queryFn: getLocation
    });
    return { location, isPending ,error}
}

export default useLocation
