# AGENTS.md — 個人作品集網站開發與擴充規範

本文件為 `Fannno/portfolio`（樊柔妤個人作品集網站）的正式開發與維護規範。所有協助維護、修改或擴充本網站的 AI Agent，在進行任何程式碼編輯前，必須先完整閱讀本文件並嚴格遵守各項規定。

---

## 1. 專案定位

* **網站定位**：軟體工程與系統開發個人作品集（Static Portfolio Website），部署於 GitHub Pages。
* **目標使用者**：技術面試官、招募主管、專案審查委員及開發協作者。
* **核心用途**：
  1. 呈現開發者的基本背景、學經歷、技術能力與聯絡方式。
  2. 透過首頁專案卡片與獨立詳細介紹頁，真實、結構化地展示各專案的系統架構、技術選型、問題排解過程與**個人實際貢獻**。
  3. 提供長期可維護與可擴充的結構，使未來新增 App、Web 或 AI 專案時能維持一致的品質與風格。

---

## 2. 整體設計規範

本網站維持簡潔、專業的黑白灰中性視覺風格，強調內容可讀性與架構清晰度，禁止過度行銷文案、AI 式浮誇修辭、Emoji 圖示以及無意義的裝飾動畫。

### 2.1 技術棧與外部資源
* **核心技術**：純靜態 HTML5、CSS3、Vanilla JavaScript（ES6+）。
* **UI 框架**：[Bootstrap 5.3.0](https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css) 與 [Bootstrap Icons 1.11.0](https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css)（CDN 引入）。
* **嚴格限制**：不得引入 React、Vue、Webpack、Vite、Tailwind 或其他額外前端建置工具，確保 GitHub Pages 開箱即用。

### 2.2 色彩系統
* **基底配色**：
  * 主背景交替：`#ffffff`（`.bg-white`）與 `#f8f9fa`（`.bg-light`）。
  * 導覽列與頁尾：`#212529`（`.bg-dark` 搭配白色文字）。
  * 主文字色：`#212529`（`.text-dark`）；次要說明文字：`#6c757d`（`.text-muted` / `.text-secondary`）。
  * 邊框與分隔線：`#dee2e6`。
* **技術標籤代表色（定義於 `assets/css/style.css`）**：
  * `.badge-swift`：`#F05138`（白字）
  * `.badge-dotnet`：`#512BD4`（白字）
  * `.badge-sql`：`#4479A1`（白字）
  * `.badge-javascript`：`#F7DF1E`（深色字 `#222`）
  * `.badge-html`：`#A63D40`（白字）
  * `.badge-java`：`#E76F00`（白字）
  * `.badge-react`：`#087EA4`（白字）
  * `.badge-node`：`#3C873A`（白字）
  * `.badge-mongodb`：`#13AA52`（白字）
  * 其餘一般狀態標籤可使用 Bootstrap 內建 `.bg-secondary`、`.bg-dark`、`.bg-success`、`.bg-info text-dark`、`.bg-light text-dark border`。

### 2.3 字體、間距與元件造型
* **字體**：沿用 Bootstrap 系統無襯線字體堆疊（System Sans-Serif），程式碼或檔案路徑使用 `<code>` 等寬字體。
* **區塊間距**：桌面版 `section` 上下內距 `60px`；手機版（`max-width: 576px`）調整為 `45px`。
* **卡片樣式**：統一使用 `.card.border-0.shadow-sm`（或搭配細邊框 `.border` 用於內頁圖表／說明容器），禁止五顏六色的漸層卡片背景。
* **按鈕層級**：
  * 主要行動按鈕（如 GitHub 原始碼、Live Demo）：`.btn-dark`。
  * 次要行動按鈕（如查看詳情、次要外連）：`.btn-outline-dark` 或 `.btn-outline-secondary`。
* **圖片與圖表規範**：
  * 系統架構圖、資料流圖與技術示意圖優先使用**原生內嵌 SVG**，色系須與網站黑白灰及低飽和度輔助色協調，不得使用高飽和度霓虹色或花俏特效。
  * 實機畫面截圖一律使用 `<figure class="screenshot-figure">` 包裝，搭配 `<figcaption>` 說明圖片內容，並設定適當比例與 `img-fluid rounded border`。
  * **嚴禁使用 AI 生成的假介面圖片冒充真實專案截圖**。若暫無實機截圖，應使用 `.screenshot-placeholder` 預留框標示預計放置的畫面說明。

---

## 3. 網站結構

```text
portfolio/
├── index.html                  # 首頁（#home, #about, #skills, #portfolio, #contact）
├── AGENTS.md                   # 本規範文件
├── README.md                   # 儲存庫說明
├── projects/                   # 各專案獨立詳細介紹頁
│   ├── steadyhope.html
│   ├── qwq.html
│   └── hatchabit.html
└── assets/                     # 共用靜態資源
    ├── css/
    │   └── style.css           # 全站共用樣式表
    ├── js/
    │   └── main.js             # 全站共用交互腳本
    └── images/                 # 專案截圖與展示圖片（依專案 slug 分目錄）
        ├── steadyhope/
        ├── qwq/
        └── hatchabit/
```

### 導覽方式
* **首頁導覽列**：`Fan's Portfolio` 品牌連結與五個區塊錨點（首頁、關於我、專業技能、專案作品、聯絡方式）。
* **詳細介紹頁導覽列**：沿用相同深色 Sticky Navbar，所有錨點連結加上 `../index.html#...` 前綴以確保正確返回首頁對應區塊。
* **內頁頂部麵包屑與返回按鈕**：緊接導覽列下方或 Hero 區頂部提供「返回專案作品（`../index.html#portfolio`）」連結。
* **內頁底部導覽**：提供「返回作品集」及「上一個／下一個專案」切換連結。

---

## 4. 新增專案頁面規範

每個位於 `projects/<project-slug>.html` 的專案詳細介紹頁，必須包含以下 12 項核心資訊（可視版面需求將第 11、12 項外部連結優先呈現於 Hero 行動按鈕區，不可缺漏任何必要欄位）：

1. **專案名稱及簡介**（Hero 區塊：含標題、副標題、技術徽章、成果／狀態標籤、核心簡介）
2. **專案背景與開發動機**（為何開發此系統、解決什麼實際痛點）
3. **專案目標**（條列具體且可驗證的開發目標）
4. **核心功能與特色**（以卡片網格呈現主要功能模組）
5. **系統架構**（使用原生內嵌 SVG 繪製系統架構圖與資料流圖，搭配文字說明各層職責）
6. **使用技術與工具**（表格或結構化清單，說明技術名稱及在專案中的實際用途）
7. **開發過程與實作方式**（列出實際模組路徑、關鍵演算法、資料結構或版本迭代歷程）
8. **遇到的問題及解決方式**（採用「問題情境 $\rightarrow$ 原因分析 $\rightarrow$ 解決方案」結構化呈現）
9. **個人負責的工作與實際貢獻**（明確區分個人實作範圍與團隊其他成員負責範圍；單人專案則明確標註獨立完成並細列負責項目）
10. **最終成果及展示畫面**（呈現具體成果指標、實機截圖或截圖預留區）
11. **GitHub Repository 連結**（呈現於 Hero 行動按鈕區）
12. **Demo 或其他展示連結（若有）**（與第 11 項一併呈現於 Hero 行動按鈕區；無公開 Demo 時可省略此鈕）

---

## 5. 檔案命名與放置規則

1. **專案詳細介紹頁**：放置於 `projects/` 目錄下，檔名一律使用全小寫英文與連字號（`kebab-case.html`），例如 `projects/steadyhope.html`、`projects/new-ai-agent.html`。
2. **共用樣式與腳本**：統一放置於 `assets/css/style.css` 與 `assets/js/main.js`，禁止在各個 HTML 檔案中重複撰寫大量 `<style>` 或 `<script>` 區塊。
3. **圖片與媒體資源**：放置於 `assets/images/<project-slug>/` 目錄下，檔名採用全小寫英文與連字號（如 `dashboard-overview.png`、`mobile-view.png`）。
4. **路徑規範**：全站一律使用**相對路徑**（首頁用 `assets/...`、`projects/...`；內頁用 `../assets/...`、`../index.html#...`），不可使用 `/assets/...` 根相對路徑，避免在 GitHub Pages 子路徑（`https://<user>.github.io/portfolio/`）部署時發生 404 破圖。

---

## 6. 共用元件與樣式

### 6.1 首頁專案卡片結構（`index.html`）
首頁專案卡片必須支援「整張卡片可點擊進入詳細頁」且「底部外部連結可獨立點擊」：

```html
<div class="col-lg-4 col-md-6">
  <div class="card h-100 border-0 shadow-sm project-card">
    <div class="card-header bg-transparent border-0 pt-4 px-4 project-badges">
      <!-- 技術標籤 -->
    </div>
    <div class="card-body px-4 d-flex flex-column">
      <h5 class="card-title fw-bold">
        <a href="projects/<slug>.html" class="text-decoration-none text-dark stretched-link project-card-link">
          專案名稱
        </a>
      </h5>
      <p class="card-text text-muted flex-grow-1">專案簡介</p>
      <div class="project-card-action text-dark small fw-semibold mt-2">
        查看專案詳情 <i class="bi bi-arrow-right ms-1"></i>
      </div>
    </div>
    <div class="card-footer bg-transparent border-0 px-4 pb-4 project-card-links">
      <!-- 外部連結按鈕（必須位於 .project-card-links 內以維持 z-index: 2） -->
    </div>
  </div>
</div>
```

### 6.2 詳細介紹頁共用元件
* `.project-hero`：內頁頂部標題與連結區。
* `.section-heading`：內頁各章節統一標題樣式（含左側深色強調線或底線）。
* `.arch-diagram-box`：系統架構圖與資料流圖 SVG 外框容器。
* `.troubleshoot-card`：問題與解決方式對照卡片。
* `.role-boundary-box`：個人貢獻與團隊分工對照區塊。
* `.screenshot-figure` / `.screenshot-placeholder`：實機截圖與截圖預留區元件。

---

## 7. 響應式設計

* **桌面版（`>= 992px`）**：首頁專案區維持三欄（`col-lg-4`）；內頁核心功能與問題解決採雙欄對照（`col-lg-6`），架構圖置中完整顯示。
* **平板版（`768px - 991px`）**：首頁專案區採雙欄（`col-md-6`）；內頁表格與雙欄卡片自動調整欄寬。
* **手機版（`< 576px`）**：
  * 所有多欄網格降為單欄（`col-12`）。
  * 資料表格一律外包 `.table-responsive` 防止橫向溢出破版。
  * 原生 SVG 圖表必須設定 `viewBox` 並搭配 `width="100%"`、`height="auto"`，確保手機螢幕等比例縮放。
  * 導覽列自動收合為漢堡選單（Bootstrap `.navbar-toggler`）。

---

## 8. AI Agent 開發規則

1. **先讀後改**：執行任何修改前，必須先檢查 `AGENTS.md`、相關 HTML 頁面與 `assets/css/style.css`、`assets/js/main.js`。
2. **禁止任意刪除既有內容**：不得擅自刪除或大幅改寫首頁的「關於我（含學歷與工作經歷）」、「技術能力」、「聯絡方式」與既有頁尾版權宣告。
3. **嚴格遵守真實性原則**：
   * 不得捏造不存在的功能、效能數據、比賽名次、Demo 連結或程式碼細節。
   * 多人協作專案必須清楚區分「個人實際負責工作」與「其他組員負責工作」，不可將他人成果寫成個人貢獻。
   * 尚未完成或屬於重構規劃中的技術（如未來計畫重構的架構），必須明確標示為「後續重構方向／規劃中」，不可偽裝為已完成成果。
   * 遇到無法從程式碼或使用者輸入確認的資訊，應主動向使用者確認，不可自行猜測。
4. **風格與元件重用**：新增頁面必須沿用 `assets/css/style.css` 既有樣式與結構，禁止在單一頁面自行發展出不同配色、字體或過多浮誇動畫。
5. **保持簡潔低複雜度**：不引入不必要的第三方 JS/CSS 套件；所有圖表優先使用輕量原生 SVG。
6. **修改後驗證清單**：每次新增或修改頁面後，必須實際檢查：
   * 首頁卡片連結與外部連結皆可正常點擊且互不衝突。
   * 內頁返回首頁及上／下專案連結正確無誤。
   * 所有 CSS、JS 與圖片相對路徑在根目錄與 `projects/` 子目錄皆可正確載入。
   * 手機、平板、桌面版無橫向捲軸破版。

---

## 9. 未來擴充方式（新增專案 SOP）

當使用者提供新專案的「專案資料、GitHub 連結、Demo 連結（若有）、個人負責內容與圖片素材」時，AI Agent 請依下列步驟執行：

1. **確認資訊與 Slug**：為專案命名全小寫 `kebab-case` 代號（例如 `smart-diet-tracker`），確認是否有未釐清的個人分工或技術細節。
2. **建立圖片目錄**：於 `assets/images/<slug>/` 放入使用者提供的截圖（若無則保留 `.screenshot-placeholder` 預留區）。
3. **建立詳細介紹頁**：複製現有 `projects/` 頁面骨架，建立 `projects/<slug>.html`，完整填入第 4 節規定的 12 項內容，並繪製專屬的原生 SVG 系統架構圖。
4. **同步更新首頁卡片**：在 `index.html` 的 `#portfolio .row` 內新增一張符合第 6.1 節規範的 `.project-card`，並確認若有新技術標籤色需求，同步補充至 `assets/css/style.css`。
5. **更新頁面間導覽**：視需要更新相鄰專案頁底部的「上一個／下一個專案」導覽連結。
6. **執行檢查**：依第 8.6 節驗證所有連結、路徑、RWD 與內容真實性後回報結果。
