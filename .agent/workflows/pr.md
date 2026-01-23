---
description: 自動化提交並建立 Pull Request (遵循專案開發標準)
---
// turbo-all

這個工作流遵循 [專案開發標準](file:///d:/AIGame/platform/docs/standards.md)，旨在實現安全且高效的代碼提交流程。

### 執行步驟

1. **偵測變更與專案路徑**
   - 自動判斷變更發生在 `platform/` 還是 `game/`。
   - 詢問使用者本次變更的類型 (feat, fix, docs, refactor, chore) 與簡短描述。

2. **自動分支命名**
   - 根據輸入生成分支名稱：`類型/簡短描述` (例如 `feat/login-page`)。

3. **本地驗證 (Pre-push Checks)**
   - 切換到對應專案目錄。
   // turbo
   - 執行 `npm run lint` (若為 Web 專案)。
   // turbo
   - 執行 `npm run test` (若有測試腳本)。
   // turbo
   - 執行 `npm run build` (確保建置成功)。
   - **注意**：若任何步驟失敗，將停止後續操作並回報錯誤。

3. **提交與推送**
   - 建立新分支：`git checkout -b <類型>/<中文描述>`。
   - 執行 Commit：`git add .` 與 `git commit -m "<類型>: <中文描述>"`。
   - 執行 Push：`git push origin HEAD`。

4. **建立 PR 與啟用自動合併 (Auto-merge)**
   // turbo
   - 建立 PR：`gh pr create --title "<類型>: <中文描述>" --body "由 AI 自動建立的 PR"`。
   // turbo
   - **啟用自動合併**：`gh pr merge --auto --squash`。
   - **注意**：這會讓 GitHub 在雲端檢查 (GitHub Actions) 通過後自動合併。

5. **回報狀態**
   - 提供 PR 連結供參考。

### 使用範例
使用者輸入：`/pr`
AI 回應：偵測到 `platform/` 有變更，請問變更類型與描述？
使用者輸入：`feat` / `新增使用者個人資料頁面`
AI 執行：驗證 -> 建立分支 -> 提交並推送 -> 建立 PR 並開啟 Auto-merge -> 回傳 PR 連結。
