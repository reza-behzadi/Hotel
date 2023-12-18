import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../service/apiCabins";

export function useDeleteCabin() {

	const QueryClient = useQueryClient();

const { isLoading: isDeleting, mutate:deleteCabin } = useMutation({
  mutationFn: deleteCabinApi,
  onSuccess: () => {
    toast.success("Cabin successfully deleted");
	
    QueryClient.invalidateQueries({
		queryKey: ["cabins"],
    });
},
onError: (err) => toast.error(err.message),
});

	return{isDeleting,deleteCabin}
}
