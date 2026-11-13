import type { Activity } from "../types/activity";

const key = "actividades:activities";

export function saveActivities(actividades: Activity[]): void {
  localStorage.setItem(key, JSON.stringify(actividades));
}

export function loadActivities(): Activity[] | null {
  const result = localStorage.getItem(key);
  if (result === null) return null;

  try {
    const data: unknown = JSON.parse(result);
    if (!Array.isArray(data)) return null;
    return data;
  } catch {
    return null;
  }
}
