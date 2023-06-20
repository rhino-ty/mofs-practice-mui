'use client';
import { PageData } from '@/types/pagination';
import fetchInstance from '../index';

export const handlePageLoad = async (
  page: number
): Promise<PageData | null> => {
  try {
    const response = await fetchInstance<PageData>(`/users?page=${page}`);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
