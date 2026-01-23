# 專案開發標準 (Project Standards)

為了確保專案的開發效率、程式碼品質以及歷史紀錄的完整性，所有開發活動必須遵循以下標準。

## 1. 自動化與合併規範 (Automation & Merging)

### 雲端自動化檢驗
- 所有變更必須通過 GitHub Actions 的自動化檢驗（包括但不限於 Lint, Test, Build）。
- 禁止在未通過檢驗的情況下合併程式碼。

### 自動合併 (Auto-merge)
- **通用規則**：為了維持一人開發的高效率，所有 Pull Request (PR) 在通過雲端自動化檢驗後，應設定為**自動合併**。
- **操作方式**：使用 `gh pr merge --auto --squash` 實現。

## 2. 文件與封存規範 (Documentation & Archiving)

### 變更紀錄 (Walkthrough)
- 每次重大功能開發、Bug 修復或工作流優化完成後，必須產生一份 `walkthrough.md`。
- 內容應包含：變更摘要、測試結果、以及任何需要注意的事項。

### 歷史紀錄封存 (Archiving)
- **通用規則**：所有開發任務結束時，必須將 `walkthrough.md` 封存。
- **封存路徑**：`platform/docs/history/YYYY-MM-DD-簡短名稱.md`。
- **版本控制**：封存的文件必須提交至 Git 儲存庫，作為專案的永久開發日誌。

## 3. 工作流指令 (Workflows)

- 所有的自動化指令（如 `/pr`）都必須內建執行上述「自動合併」與「自動封存」的邏輯，或引導開發者完成這些步驟。
