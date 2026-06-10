export interface MakeupGuide {
  isMock?: boolean;
  skinProfileAnalysis: string;
  skinPreparationSteps: string[];
  makeupApplicationSteps: {
    phase: string;
    step: string;
    tip: string;
  }[];
  colorPalette: {
    primary: string;
    undertoneName: string;
    explanation: string;
  };
  productRecommendations: {
    category: string;
    ecoBrand: string;
    premiumBrand: string;
    notes: string;
  }[];
  proTips: string[];
}

export interface UserSelections {
  skinType: string;
  skinTone: string;
  eyeColor: string;
  budgetPreference: string;
  makeupStyle: string;
  specificGoal: string;
}
