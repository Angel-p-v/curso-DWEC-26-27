import type { Device } from "../types/device";

const key = "dispositivos:devices";

export function saveDevices(devices: Device[]) {
  localStorage.setItem(key, JSON.stringify(devices));
}

export function loadDevices(): Device[] | null {
  const result = localStorage.getItem(key);
  if (result === null) return null;

  try {
    const data: unknown = JSON.parse(result);
    if (!Array.isArray(data)) return null;
    return data as Device[];
  } catch {
    return null;
  }
}
