# 專案建置與 CI/CD 實作計畫

## 目標
為一款網頁版 .io 遊戲建立穩固的軟體工程基礎，在開始實際遊戲開發之前，先專注於版本控制 (Git) 和持續整合/持續部署 (CI/CD) 的設定。

## 需要使用者審閱
> [!IMPORTANT]
> 請確認您偏好的託管平台 (例如 Vercel, Netlify, AWS, Google Cloud) 以及 Git 提供者 (GitHub Actions 預設使用 GitHub)。
> 對於 .io 遊戲 (即時多人連線)，我們最終會需要一個支援 WebSockets 的後端。在此初始設定中，我建議建立 **Vite + TypeScript** 前端以及基礎的 **Node.js** 後端結構，並搭配 CI 流程來驗證兩者。

## 建議架構
- **語言**: TypeScript (對於維護複雜的遊戲邏輯至關重要)。
- **打包工具/框架**: Vite (快速、高效)。
- **程式碼檢查/格式化**: ESLint + Prettier。
- **CI/CD 提供者**: GitHub Actions。
- **容器化**: Docker (選用，但建議用於遊戲伺服器)。

## 預計變更

### 1. 專案初始化
- 初始化 Git 儲存庫。
- 建立 `.gitignore`。
- 建立基礎 **Vite + TypeScript** 專案架構。

### 2. 程式碼品質工具
- 設定 **ESLint** 以維持程式碼品質。
- 設定 **Prettier** 以統一程式碼格式。
- 加入 `husky` (選用) 作為 commit 前的檢查掛鉤，確保 commit 的整潔。

### 3. CI/CD 流程 (GitHub Actions)
我們將在 `.github/workflows/` 中建立以下工作流程：

#### [NEW] `ci.yml`
在 Pull Requests 和推送到 `main` 分支時觸發。
- **Checkout code** (檢出程式碼)。
- **Install dependencies** (安裝依賴)。
- **Lint check** (檢查程式碼風格，若不佳則失敗)。
- **Type check** (`tsc --noEmit` 檢查型別)。
- **Build check** (確保專案能無誤建置)。
- **Test** (執行單元測試，例如 Vitest)。

#### [NEW] `cd.yml` (草稿)
在推送到 `main` 分支時觸發。
- **Build** (建置)。
- **Deploy** (部署步驟佔位符，或若您有目標平台則進行實際部署)。

## 驗證計畫
### 自動化測試
- 在本地執行 `npm run lint`。
- 在本地執行 `npm run build`。
- 藉由在本地執行工作流程步驟或推送到測試用的 repo (若使用者提供) 來模擬 CI 執行。

### 手動驗證
- 驗證目錄結構是否整潔有序。
- 檢查設定檔 (`tsconfig.json`, `.eslintrc` 等) 是否正確設定。
