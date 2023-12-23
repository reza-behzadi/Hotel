import { useQuery } from "@tanstack/react-query";
import {getSettings} from '../../service/apiSettings'

export function useSettings() {
	const { isLoading, error, data: settings } = useQuery({
		queryKey:["settings"],
		queryFn: getSettings,
	});
	return{isLoading,error,settings}
}