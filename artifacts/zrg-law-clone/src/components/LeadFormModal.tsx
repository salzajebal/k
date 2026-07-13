import { useState, useEffect, type FormEvent } from "react";
import { useCreateLead } from "@workspace/api-client-react";

const TIME_OPTIONS = [
  "언제든 상관없음",
  "오전상담 선호",
  "오후 1~3시",
  "오후 3~6시",
  "저녁 시간대",
];

interface FormState {
  name: string;
  phone: string;
  creditDebt: string;
  securedDebt: string;
  assets: string;
  income: string;
  preferredTime: string;
  consent: boolean;
}

const initialState: FormState = {
  name: "",
  phone: "",
  creditDebt: "",
  securedDebt: "",
  assets: "",
  income: "",
  preferredTime: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const createLead = useCreateLead();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setForm(initialState);
      setStatus("idle");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const update = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.consent) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    createLead.mutate(
      {
        data: {
          name: form.name,
          phone: form.phone,
          creditDebt: form.creditDebt || null,
          securedDebt: form.securedDebt || null,
          assets: form.assets || null,
          income: form.income || null,
          preferredTime: form.preferredTime || null,
        },
      },
      {
        onSuccess: () => { setStatus("success"); setForm(initialState); },
        onError: () => { setStatus("error"); },
      },
    );
  };

  return (
    <div className="zrg-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="zrg-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="zrg-modal-close" type="button" aria-label="닫기" onClick={onClose}>✕</button>

        {status === "success" ? (
          <div className="zrg-modal-success">
            <div className="zrg-modal-success-icon">✓</div>
            <p className="zrg-modal-success-title">접수가 완료되었습니다</p>
            <p className="zrg-modal-success-sub">영업일 기준 빠르게 담당자가 연락드리겠습니다.</p>
            <button type="button" className="zrg-modal-success-close" onClick={onClose}>
              닫기
            </button>
          </div>
        ) : (
          <form className="zrg-modal-form" onSubmit={handleSubmit}>
            <p className="zrg-modal-form-title">무료 진단 신청서</p>

            <label>
              이름 <span className="req">*</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="이름을 입력해주세요"
                required
              />
            </label>

            <label>
              전화번호 <span className="req">*</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="010-0000-0000"
                required
              />
            </label>

            <label>
              신용채무 (무담보)
              <input
                type="text"
                value={form.creditDebt}
                onChange={(e) => update("creditDebt", e.target.value)}
                placeholder="예: 3,000만원"
              />
            </label>

            <label>
              담보채무
              <input
                type="text"
                value={form.securedDebt}
                onChange={(e) => update("securedDebt", e.target.value)}
                placeholder="예: 1억원"
              />
            </label>

            <label>
              재산 (부동산·차량·임차보증금 등)
              <input
                type="text"
                value={form.assets}
                onChange={(e) => update("assets", e.target.value)}
                placeholder="예: 전세보증금 5,000만원"
              />
            </label>

            <label>
              월 소득
              <input
                type="text"
                value={form.income}
                onChange={(e) => update("income", e.target.value)}
                placeholder="예: 250만원"
              />
            </label>

            <label>
              상담 가능 시간대
              <select
                value={form.preferredTime}
                onChange={(e) => update("preferredTime", e.target.value)}
                className="zrg-modal-select"
              >
                <option value="">선택해주세요 (선택사항)</option>
                {TIME_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>

            <label className="zrg-modal-consent">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                required
              />
              <span>
                (필수) 무료 상담을 위한 개인정보 수집·이용에 동의합니다. 입력하신 정보는 상담
                목적으로만 사용되며 상담 완료 후 즉시 파기됩니다.
              </span>
            </label>

            {status === "error" && (
              <p className="zrg-modal-error">
                이름, 전화번호, 개인정보 동의는 필수입니다. 다시 확인해주세요.
              </p>
            )}

            <button type="submit" className="zrg-modal-submit" disabled={status === "submitting"}>
              {status === "submitting" ? "전송 중..." : "무료 진단 신청하기"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
