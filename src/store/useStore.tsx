import { create } from "zustand";

type Step = "info" | "plan" | "addons" | "summary" | "thanks";
type Store = {
  step: Step;
  changeStep: (value: Step) => void;
};

export const useStore = create<Store>((set) => ({
  step: "info",
  changeStep: (stepValue: Step) => set(() => ({ step: stepValue })),
}));
