import { useState, type FormEvent } from "react";
import {
  useAdminLogin,
  useListLeads,
  useGetAdminSettings,
  useUpdateAdminSettings,
  useDetectTelegramChat,
  useGetStats,
} from "@workspace/api-client-react";

const STORAGE_KEY = "zrg-admin-key";

function LoginForm({ onLoggedIn }: { onLoggedIn: (key: string) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const loginMutation = useAdminLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    loginMutation.mutate(
      { data: { username, password } },
      {
        onSuccess: () => {
          sessionStorage.setItem(STORAGE_KEY, password);
          onLoggedIn(password);
        },
        onError: () => {
          setError("아이디 또는 비밀번호가 올바르지 않습니다.");
        },
      },
    );
  };

  return (
    <div className="zrg-admin-login">
      <form className="zrg-admin-login-form" onSubmit={handleSubmit}>
        <h1>관리자 로그인</h1>
        <label>
          아이디
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error && <p className="zrg-admin-error">{error}</p>}
        <button type="submit" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}

const LEADS_PER_PAGE = 10;

function LeadsTable({ adminKey }: { adminKey: string }) {
  const { data: leads, isLoading, isError } = useListLeads({
    request: { headers: { "X-Admin-Key": adminKey } },
  });
  const [page, setPage] = useState(1);

  if (isLoading) return <p>불러오는 중...</p>;
  if (isError) return <p className="zrg-admin-error">목록을 불러오지 못했습니다.</p>;
  if (!leads || leads.length === 0) return <p>접수된 상담 신청이 없습니다.</p>;

  const totalPages = Math.max(1, Math.ceil(leads.length / LEADS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * LEADS_PER_PAGE;
  const pageLeads = leads.slice(start, start + LEADS_PER_PAGE);

  return (
    <div>
      <div className="zrg-admin-table-wrap">
        <table className="zrg-admin-table">
          <thead>
            <tr>
              <th>접수일시</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>신용채무</th>
              <th>담보채무</th>
              <th>재산</th>
              <th>월소득</th>
              <th>상담 선호 시간대</th>
            </tr>
          </thead>
          <tbody>
            {pageLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{new Date(lead.createdAt).toLocaleString("ko-KR")}</td>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.creditDebt ?? "-"}</td>
                <td>{lead.securedDebt ?? "-"}</td>
                <td>{lead.assets ?? "-"}</td>
                <td>{lead.income ?? "-"}</td>
                <td>{lead.preferredTime ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="zrg-admin-pagination">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            이전
          </button>
          <span className="zrg-admin-pagination-info">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}

function TelegramSettings({ adminKey }: { adminKey: string }) {
  const { data: settings, isLoading, refetch } = useGetAdminSettings({
    request: { headers: { "X-Admin-Key": adminKey } },
  });
  const updateMutation = useUpdateAdminSettings({
    request: { headers: { "X-Admin-Key": adminKey } },
  });
  const detectMutation = useDetectTelegramChat({
    request: { headers: { "X-Admin-Key": adminKey } },
  });

  const [botToken, setBotToken] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [detectError, setDetectError] = useState<string | null>(null);
  const [detectedTitle, setDetectedTitle] = useState<string | null>(null);

  if (settings && !initialized) {
    setBotToken(settings.telegramBotToken ?? "");
    setDetectedTitle(settings.telegramChatTitle ?? null);
    setInitialized(true);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDetectError(null);
    setDetectedTitle(null);

    updateMutation.mutate(
      { data: { telegramBotToken: botToken || null } },
      {
        onSuccess: () => {
          if (!botToken) return;
          detectMutation.mutate(undefined, {
            onSuccess: (updated) => {
              setDetectedTitle(updated.telegramChatTitle ?? null);
              void refetch();
            },
            onError: () => {
              setDetectError(
                "그룹방을 찾을 수 없습니다. 봇을 그룹방에 초대한 후 그룹방에 아무 메시지나 보내고 다시 시도해주세요.",
              );
            },
          });
        },
      },
    );
  };

  if (isLoading) return <p>불러오는 중...</p>;

  const isBusy = updateMutation.isPending || detectMutation.isPending;

  return (
    <form className="zrg-admin-settings-form" onSubmit={handleSubmit}>
      <p className="zrg-admin-settings-help">
        텔레그램 봇 토큰을 저장하면, 해당 봇이 초대되어 있는 그룹방을 자동으로 인식하여 알림을
        보낼 채팅방으로 연결합니다. 미리 봇을 그룹방에 초대하고 아무 메시지나 한 번 보낸 뒤
        저장해주세요.
      </p>
      <label>
        텔레그램 봇 토큰
        <input
          type="text"
          value={botToken}
          onChange={(e) => setBotToken(e.target.value)}
          placeholder="예: 123456789:ABCdefGhIJKlmNoPQRstuVwxYZ"
        />
      </label>
      <button type="submit" disabled={isBusy}>
        {isBusy ? "저장 및 그룹방 인식 중..." : "저장 및 그룹방 자동 인식"}
      </button>
      {detectedTitle && (
        <p className="zrg-admin-success">연결된 그룹방: {detectedTitle}</p>
      )}
      {detectError && <p className="zrg-admin-error">{detectError}</p>}
      {updateMutation.isError && (
        <p className="zrg-admin-error">저장에 실패했습니다. 다시 시도해주세요.</p>
      )}
    </form>
  );
}

function StatCard({ label, value, sub }: { label: string; value: number; sub?: string }) {
  return (
    <div className="zrg-admin-stat-card">
      <p className="zrg-admin-stat-label">{label}</p>
      <p className="zrg-admin-stat-value">{value.toLocaleString("ko-KR")}</p>
      {sub && <p className="zrg-admin-stat-sub">{sub}</p>}
    </div>
  );
}

function VisitorStats({ adminKey }: { adminKey: string }) {
  const { data: stats, isLoading, isError } = useGetStats({
    request: { headers: { "X-Admin-Key": adminKey } },
  });

  if (isLoading) return <p>불러오는 중...</p>;
  if (isError || !stats) return <p className="zrg-admin-error">통계를 불러오지 못했습니다.</p>;

  const maxViews = Math.max(1, ...stats.daily.map((d) => d.views));

  return (
    <div className="zrg-admin-stats">
      <div className="zrg-admin-stat-grid">
        <StatCard label="오늘 방문자" value={stats.today.visitors} sub={`조회수 ${stats.today.views.toLocaleString("ko-KR")}`} />
        <StatCard label="최근 7일 방문자" value={stats.last7Days.visitors} sub={`조회수 ${stats.last7Days.views.toLocaleString("ko-KR")}`} />
        <StatCard label="최근 30일 방문자" value={stats.last30Days.visitors} sub={`조회수 ${stats.last30Days.views.toLocaleString("ko-KR")}`} />
        <StatCard label="누적 방문자" value={stats.total.visitors} sub={`조회수 ${stats.total.views.toLocaleString("ko-KR")}`} />
      </div>
      <p className="zrg-admin-stats-note">
        같은 방문자가 여러 번 접속해도 방문자 수는 브라우저별로 한 번만 집계되며, 자동 봇/크롤러
        접속은 집계에서 제외됩니다.
      </p>
      {stats.daily.length > 0 && (
        <div className="zrg-admin-stats-chart">
          <h2>최근 14일 방문 추이</h2>
          <div className="zrg-admin-chart-bars">
            {stats.daily.map((d) => (
              <div className="zrg-admin-chart-bar-wrap" key={d.date}>
                <div
                  className="zrg-admin-chart-bar"
                  style={{ height: `${Math.max(4, (d.views / maxViews) * 100)}%` }}
                  title={`${d.date}: 방문자 ${d.visitors} / 조회수 ${d.views}`}
                />
                <span className="zrg-admin-chart-label">{d.date.slice(5)}</span>
              </div>
            ))}
          </div>
          <div className="zrg-admin-table-wrap">
            <table className="zrg-admin-table">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>방문자</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                {[...stats.daily].reverse().map((d) => (
                  <tr key={d.date}>
                    <td>{d.date}</td>
                    <td>{d.visitors.toLocaleString("ko-KR")}</td>
                    <td>{d.views.toLocaleString("ko-KR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function Dashboard({ adminKey, onLogout }: { adminKey: string; onLogout: () => void }) {
  const [tab, setTab] = useState<"leads" | "stats" | "settings">("leads");

  return (
    <div className="zrg-admin-dashboard">
      <header className="zrg-admin-header">
        <h1>화민 관리자</h1>
        <button type="button" className="zrg-admin-logout" onClick={onLogout}>
          로그아웃
        </button>
      </header>
      <nav className="zrg-admin-tabs">
        <button
          type="button"
          className={tab === "leads" ? "active" : ""}
          onClick={() => setTab("leads")}
        >
          상담 신청 목록
        </button>
        <button
          type="button"
          className={tab === "stats" ? "active" : ""}
          onClick={() => setTab("stats")}
        >
          방문자 통계
        </button>
        <button
          type="button"
          className={tab === "settings" ? "active" : ""}
          onClick={() => setTab("settings")}
        >
          텔레그램 알림 설정
        </button>
      </nav>
      <section className="zrg-admin-content">
        {tab === "leads" && <LeadsTable adminKey={adminKey} />}
        {tab === "stats" && <VisitorStats adminKey={adminKey} />}
        {tab === "settings" && <TelegramSettings adminKey={adminKey} />}
      </section>
    </div>
  );
}

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState<string | null>(
    () => sessionStorage.getItem(STORAGE_KEY),
  );

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAdminKey(null);
  };

  return (
    <div className="zrg-admin-page">
      {adminKey ? (
        <Dashboard adminKey={adminKey} onLogout={handleLogout} />
      ) : (
        <LoginForm onLoggedIn={setAdminKey} />
      )}
    </div>
  );
}
