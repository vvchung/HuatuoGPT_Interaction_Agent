# 💊 HuatuoGPT Agent：中西藥交互作用・自動探勘系統 🚀

> **別再讓你的時間淹沒在 PubMed 的浩瀚大海裡！**
> 結合 **HuatuoGPT 的靈魂** 與 **Gemini 的算力**，我們打造了強大的「中西藥交互作用」醫學文獻提取 Agent。

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Tech](https://img.shields.io/badge/Tech-React%20%7C%20Gemini%20API%20%7C%20Tailwind-teal) ![Status](https://img.shields.io/badge/Status-Blazing%20Fast-fire)

## ⚡️ 為什麼你需要這個？ (The Why)

在「中西醫結合治療」的複雜領域中，醫生與研究人員面臨著兩個極端：
1.  **ChatGPT 很會聊**，但缺乏深度的診斷邏輯，容易產生幻覺 (Hallucination)。
2.  **PubMed 文獻太硬**，幾百篇英文摘要，光是篩選「丹參」跟「華法林」有沒有衝突就看到眼睛脫窗。

**HuatuoGPT Agent 就是為此而生的。** 

我們不只是呼叫 API，我們透過 **Prompt Engineering (提示詞工程)** 馴服了 LLM，將它從一個「閒聊者」轉變為一位**「資深臨床藥理學研究員」**。

---

## 🔥 核心黑科技 (The Secret Sauce)

本專案完美復刻了 **HuatuoGPT (Towards Taming Language Model to Be a Doctor)** 論文中的核心 Prompt 策略：

### 1. 角色扮演 (Role-Play Like a Pro) 🎭
我們強迫 AI 戴上「資深藥師」的面具。它不再是通用的 AI，而是具備 **RLAIF (Reinforcement Learning from AI Feedback)** 精神的專家，專注於 Doctor-like 的準確性。

### 2. 結構化思維 (Structured Extraction) 🧬
輸入雜亂無章的 Abstract，輸出 **100% 純淨的 JSON**。
*   🎯 **識別成分**：精準抓出 Western Drug vs. Chinese Herb。
*   ⚡ **交互作用分析**：是藥代動力學 (PK) 還是藥效學 (PD)？
*   ⚠️ **風險評估**：High / Medium / Low，一目了然。

### 3. 主動提問 (Active Questioning) 🛡️
如果在文獻中找不到證據？Agent 絕不瞎掰！它會誠實地在 Error 欄位回報 `'Need full text for verification'`，杜絕醫療誤導。

---

## 🛠️ 專案展示 (Demo)

我們打造了極致的 **雙模式介面 (Dual-View Interface)**，同時滿足人類與機器的需求：

### 🖥️ 視覺與數據的完美協奏
*   **左側：臨床報告卡 (Clinical Card)** - 給人類看的！精美可視化設計，關鍵風險紅字標示，決策只需一秒。
*   **右側：JSON 數據流 (Data Stream)** - 給機器看的！乾淨、標準化的 JSON 格式，直接存入資料庫，無需二次清洗。

![HuatuoGPT Agent Interface](images/screenshot.png)

---

## 🚀 啟動與部署您的 AI Studio 應用程式

這裡有您在自家電腦上運行 App 所需的一切寶貝！

👀 **在 AI Studio 瞧瞧您的 App：** 
[https://ai.studio/apps/drive/11wfoJlccGnmaqc4ilfclNHW-cYAZxxMV?fullscreenApplet=true](https://ai.studio/apps/drive/11wfoJlccGnmaqc4ilfclNHW-cYAZxxMV?fullscreenApplet=true)
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

### 💻 在本機端運行

三步搞定，馬上開始你的文獻探勘之旅：

### 1. Clone 專案
```bash
git clone https://github.com/your-username/huatuo-gpt-agent.git
cd huatuo-gpt-agent
```

### 2. 安裝依賴
```bash
npm install
# 或是
yarn install
```

### 3. 設定 API Key & 啟動
你需要一把鑰匙來開啟 Gemini 的大門。
在根目錄建立 `.env` 檔案：
```env
API_KEY=your_google_gemini_api_key_here
```

然後點火升空：
```bash
npm start
```

打開瀏覽器前往 `http://localhost:3000`，見證魔法。

---

## 🧪 測試範例 (Try it out!)

不知道從哪裡開始？試試看這段經典的 **華法林 (Warfarin)** 與 **丹參 (Danshen)** 的相愛相殺：

> "Results: Co-administration of Danshen significantly increased the AUC and Cmax of warfarin."

**Agent 將會告訴你：**
*   **Interaction:** Pharmacokinetic (藥代動力學)
*   **Mechanism:** 丹參抑制代謝，導致華法林血中濃度飆升。
*   **Risk:** 🔴 **HIGH** (出血風險增加)

---

## 📚 參考文獻 (Credits)

本專案的 Prompt Engineering 設計靈感與邏輯源自於以下研究：
*   **HuatuoGPT: Towards Taming Language Model to Be a Doctor**
*   特別感謝論文附錄 Appendix A.1 對於 `<Role, Instruction, Input>` 三元組結構的啟發。

---

## ⚠️ 免責聲明 (Disclaimer)

本工具僅供 **醫學研究與學術探討** 使用。

AI 雖強，但仍有人工智慧的極限。**所有臨床決策請務必經過專業藥師與醫師的人工核對 (Human-in-the-loop)。**

---

<div align="center">
  <p>Made with ❤️ and ☕️ by vvchung</p>
  <p><i>Building the bridge between TCM and Modern Medicine.</i></p>
</div>
