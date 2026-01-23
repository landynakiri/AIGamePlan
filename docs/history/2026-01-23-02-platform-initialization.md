# AIGame 平台：遊戲清單與初始化完成

我已經成功初始化了 AIGame 平台的前端基礎架構，並實作了 premium 視覺品質的遊戲清單。

## 重點功能

### 1. 現代化視覺設計 (Premium Design)
採用了 **Glassmorphism (毛玻璃)** 效果、深色主題與動態漸層。
- **全域樣式**: 定義於 [index.css](file:///d:/AIGame/platform/src/index.css)。
- **動態效果**: 滑鼠懸停於遊戲卡片時有縮放與發光動畫。

### 2. 遊戲資料庫與卡片系統
- **資料驅動**: 透過 [GameDatabase.ts](file:///d:/AIGame/platform/src/GameDatabase.ts) 管理遊戲中繼資料。
- **組件化**: 實作了 `GameCard` 展示遊戲資訊。

### 3. 轉場與載入容器
實作了從大廳切換到遊戲畫面的邏輯。點擊遊戲後，會進入一個模擬的 Unity 載入視窗。

## 視覺搶先看

![遊戲清單預覽](/C:/Users/landy.lin/.gemini/antigravity/brain/6286d02f-effb-41da-9ca3-f8ec9ebc2acd/game1.png)
*這是專為 Game1 (Crystal Guardians) 生成的遊戲預覽圖*

## 已實作的內容

- [x] **Vite + React + TS 初始化**：建立標準開發環境。
- [x] **Lucide React 整合**：提供高品質導覽圖標。
- [x] **類型安全**：使用 TypeScript 定義 [types.ts](file:///d:/AIGame/platform/src/types.ts)，確保資料結構嚴謹。
- [x] **跨 Repo 準備**：已配置好 `submodulePath`，為未來動態載入 Unity 內容做準備。

## 如何啟動預覽

請在終端機執行：
```powershell
cd d:\AIGame\platform
npm run dev
```
然後點擊產生的本地連結（通常是 `http://localhost:5173`）即可看到目前的設計！
