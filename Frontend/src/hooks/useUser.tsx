import { GetMethods, UserResponse } from "@newrr/api";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async (): Promise<UserResponse | null> => {
  const getMethods = new GetMethods(import.meta.env.VITE_G_API_URL);
  const result = await getMethods.checkAuth();

  if (!result.authenticated) {
    console.log("User is not authenticated");
    return null;
  }

  return result;
};

export const useUser = () => {
  return useQuery<UserResponse | null, Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false, // Don't retry on error
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
  });
};
