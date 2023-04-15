type Menus = {
  title: string;
  stepName: "info" | "plan" | "addons" | "summary" | "thanks";
};

export const menus = [
  {
    title: "YOUR INFO",
    stepName: "info",
  },
  {
    title: "SELECT PLAN",
    stepName: "plan",
  },
  {
    title: "ADD-ONS",
    stepName: "addons",
  },
  {
    title: "SUMMARY",
    stepName: "summary",
  },
] as Menus[];
