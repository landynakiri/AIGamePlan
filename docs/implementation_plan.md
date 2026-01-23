# 專案建置與 CI/CD 實作計畫

## 目標
為一款網頁版 .io 遊戲建立穩固的軟體工程基礎，專注於 React 平台初始化、Unity 整合以及自動化開發工作流。

## 需要使用者審閱
> [!IMPORTANT]
> - 我們將在 `platform/` 目錄下初始化 Vite + React + TypeScript 專案。
> - 現有的 `/pr` 工作流在 React 專案建立後，將會開始執行實質的 lint 與 build 檢查。

## 建議架構
- **前端框架**: Vite + React + TypeScript (位於 `platform/`)。
- **遊戲引擎**: Unity WebGL (位於 `game/`)。
- **通訊方式**: WebSocket (後續階段實作)。
- **CI/CD**: GitHub Actions。

## 預計變更

### 1. 專案初始化與結構設定 (Platform)
- [ ] **[NEW]** 在 `platform/` 下執行 `npm create vite@latest . -- --template react-ts` 初始化。
- [ ] **[NEW]** 建立基礎目錄結構：
    - `src/components`: UI 元件 (如 Unity 容器、排行榜)。
    - `src/hooks`: 自定義 React Hooks。
    - `src/services`: API 與 WebSocket 通訊服務。
- [ ] **[MODIFY]** 更新 `.gitignore` 以包含 Node.js 與 Vite 的預設排除項。

### 2. 核心功能實作 (第一階段)
- [ ] **[NEW]** 實作 `UnityContainer.tsx`：用於嵌入與控制 Unity WebGL 實例。
- [ ] **[NEW]** 建立基礎排版：主遊戲區域、側邊排行榜、頂部狀態列。

### 3. 程式碼品質與自動化
- [ ] 在 `platform/` 下設定 **ESLint** 與 **Prettier**。
- [ ] 建立 `.github/workflows/ci.yml` 用於自動化檢查。

## 驗證計畫
### 自動化測試
- 執行 `npm run lint` 確保代碼符合標準。
- 執行 `npm run build` 確保專案能正確生成編譯產物。

### 手動驗證
- 啟動開發伺服器 (`npm run dev`) 確認 React 頁面能正常顯示。
- 檢查 `UnityContainer` 是否能正確顯示佔位內容或 Unity 載入畫面。
