import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../service/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: editSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["Settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, editSetting };
}
