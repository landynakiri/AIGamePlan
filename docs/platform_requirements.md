# Web .io 遊戲平台：需求與架構規劃

這份文件定義了 AIGame 平台的長期願景與核心功能需求。

## 1. 核心需求與目標
- **即時性 (Real-time)**: 支援低延遲的多人連線互動。
- **易存取性 (Accessibility)**: 無需下載，瀏覽器開啟即玩。
- **可擴展性 (Scalability)**: 架構支援隨著玩家數量增加而水平擴展。
- **跨平台 (Cross-Platform)**: 支援行動裝置與桌面瀏覽器。

## 2. 功能清單

### 2.1 遊戲管理 (Game Management)
- **Unity WebGL 整合**: 平台需能動態載入並執行 Unity 編譯的 WebGL 遊戲內容。
- **解析度自適應**: 遊戲畫面應能根據瀏覽器視窗大小自動調整。

### 2.2 使用者系統 (User System)
- **匿名遊客模式**: 允許玩家無需註冊即可快速開始遊戲。
- **帳戶連動 (GitHub/Google)**: 永久保存玩家進度與裝備。
- **玩家簡述 (Profile)**: 顯示等級、勝率與獲得的成就。

### 2.3 社交與競爭 (Social & Competitive)
- **全球排行榜 (Leaderboards)**: 每日、每週及歷史最高分排行榜。
- **大廳與配對 (Matchmaking)**: 自動將玩家分配到適合的伺服器或房間。
- **成就系統 (Achievements)**: 完成特定條件可獲得勳章或獎勵。

### 2.4 貨幣與商店 (Monetization & Shop) - 選配
- **外觀系統 (Skins)**: 玩家可更換遊戲角色或道具的外觀。
- **代幣系統 (Currency)**: 遊戲內獲得的點數可用於解鎖項目。

## 3. 技術架構建議

### 3.1 前端 (Frontend) - `platform/`
- **框架**: Vite + React + TypeScript。
- **樣式**: Vanilla CSS / Tailwind CSS (待定)。
- **通訊**: WebSocket 客戶端 (用於即時遊戲資料)、Rest API (用於使用者資料)。

### 3.2 後端 (Backend) - 待建立
- **API 伺服器**: Node.js (Express/NestJS) 處理使用者資料、排行榜。
- **遊戲伺服器 (Game Server)**: 使用 WebSocket (Socket.io 或原生 WS) 處理移動、碰撞與狀態同步。
- **資料庫**: 
    - **PostgreSQL/MongoDB**: 存取永久資料 (帳戶、成就)。
    - **Redis**: 處理即時排行榜與 Session。

### 3.3 基礎設施 (Infrastructure)
- **GitHub Actions**: 自動化測試與部署。
- **Docker**: 容器化後端服務，便於在雲端擴展。

## 4. 下一步規劃
1. **建立 Platform 範本**: 在 `platform/` 初始化 React + Vite。
2. **設計 WebSocket 協議**: 定義前端與後端交換遊戲狀態的格式。
3. **Unity 集成原型**: 建立一個簡易的 Unity WebGL 載入容器。
