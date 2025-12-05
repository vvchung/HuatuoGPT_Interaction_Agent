export interface InteractionResult {
  western_drug: string;
  chinese_herb: string;
  interaction_type: 'Pharmacokinetic' | 'Pharmacodynamic' | 'Unknown' | 'None';
  mechanism_summary: string;
  clinical_risk: 'High' | 'Medium' | 'Low' | 'Unknown';
  evidence_level: 'Case Report' | 'Clinical Trial' | 'Animal Study' | 'Unknown';
  error?: string;
}

export interface AnalysisState {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: InteractionResult | null;
  errorMessage?: string;
}