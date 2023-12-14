import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export function useGetTutorialIntroVideo(
  tutorialSlug: string,
  options?: Record<any, any>
) {
  return useQuery(
    ["GetIntroVideo"],
    () =>
      axios
        .get<any>(`api/videos/intros/${tutorialSlug}`, {
          withCredentials: true,
        })
        .then((res) => res.data),
    { ...options }
  );
}

export function useGetTutorialLessonVideos(
  tutorialSlug: string,
  options?: Record<any, any>
) {
  return useQuery(
    ["GetTutorialLessonVideos"],
    () =>
      axios
        .get<any>(`/api/videos/lessons/${tutorialSlug}`, {
          withCredentials: true,
        })
        .then((res) => {
          return res.data;
        }),
    { ...options }
  );
}
