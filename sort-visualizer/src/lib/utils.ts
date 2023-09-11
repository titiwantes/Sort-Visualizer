import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface IListParams {
  length: number;
  max: number;
  min: number;
}

export const getRandomNumberList = ({
  length,
  max,
  min,
}: IListParams): number[] =>
  [...Array(length)].map(() => Math.floor(Math.random() * (max - min) + min));
