import { GetMethods, UserResponse } from '@newrr/api';
import { useQuery } from '@tanstack/react-query';

const fetchUser = async (): Promise<UserResponse> => {
  const getMethods = new GetMethods(import.meta.env.VITE_G_API_URL);
  const result = await getMethods.checkAuth();

  if (!result.authenticated) {
    throw new Error('User is not authenticated');
  }

  return result;
};

export const useUser = () => {
  return useQuery<UserResponse, Error>({
    queryKey: ['user'],
    queryFn: fetchUser,
    retry: false, // Don't retry on error
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
  });
};