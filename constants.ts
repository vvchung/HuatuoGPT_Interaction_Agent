export const SAMPLE_ABSTRACT = `Background: Warfarin is a widely used anticoagulant with a narrow therapeutic index. 
Danshen (Salvia miltiorrhiza) is a popular Chinese herb for cardiovascular diseases. 
Methods: This study investigated the effect of Danshen on the pharmacokinetics of warfarin in rats. 
Results: Co-administration of Danshen significantly increased the AUC and Cmax of warfarin. 
Conclusion: Danshen may inhibit the metabolism of warfarin, potentially increasing bleeding risk.`;

export const SYSTEM_INSTRUCTION = `You are a Senior Clinical Pharmacologist and Researcher specializing in integrated Traditional Chinese and Western Medicine. You possess high academic literacy and excel at extracting key data from complex medical literature.`;

export const PROMPT_TEMPLATE = `
### Instruction (指令):
請閱讀下方的醫學文獻摘要（Input），並執行以下任務：
1. 識別文中提到的「西藥成分」與「中草藥/植化素」。
2. 分析兩者是否存在交互作用（Interaction）。
3. 如果存在，請說明機制（例如：藥代動力學改變、藥效學協同/拮抗）。
4. 評估臨床風險等級（高/中/低）。
5. 嚴格輸出為 JSON 格式，不要包含其他閒聊文字。

### Input (輸入文獻):
{paper_abstract}

### Output Requirement (輸出要求):
請僅輸出以下 JSON 格式。如果找不到明確證據，請在 error 欄位填寫 'Need full text for verification'。

{{
 "western_drug": "藥物英文名 (中文名)",
 "chinese_herb": "草藥英文名 (中文名)",
 "interaction_type": "Pharmacokinetic / Pharmacodynamic",
 "mechanism_summary": "用繁體中文簡述機制，如：抑制 CYP3A4 導致血中濃度上升...",
 "clinical_risk": "High / Medium / Low / Unknown",
 "evidence_level": "Case Report / Clinical Trial / Animal Study"
}}
`;