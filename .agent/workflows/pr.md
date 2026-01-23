---
description: 自動化 PR 並開啟自動合併 (Auto-merge)
---
// turbo-all


這個工作流會根據專案規範自動建立 PR 並設定自動合併。

### 執行步驟

1. **檢查 Git 狀態**
   - 確認是否有未提交的變更。
   - 若有，引導使用者完成提交。

2. **建立 Pull Request**
   - 執行 `gh pr create --fill`。
   - 若 PR 已存在，則跳過此步。

3. **設定自動合併**
   - 執行 `gh pr merge --auto --squash`。
   - 這將確保 CI 通過後自動合併至 `main`。

4. **後續處理**
   - 提醒使用者將這次的 `walkthrough.md` 封存至 `platform/docs/history/`。

---
> [!IMPORTANT]
> 執行此指令前，請確保已執行 `gh auth login` 登入 GitHub。
