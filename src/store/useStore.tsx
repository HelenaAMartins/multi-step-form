import { create } from "zustand";

type Step = "info" | "plan" | "addons" | "summary";
type Store = {
  step: Step;
  changeStep: (value: Step) => void;
};

export const useStore = create<Store>((set) => ({
  step: "addons",
  changeStep: (stepValue: Step) => set(() => ({ step: stepValue })),
}));
