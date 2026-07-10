import { useState, type FormEvent } from "react";
import { useCreateLead } from "@workspace/api-client-react";

interface FormState {
  name: string;
  phone: string;
  creditDebt: string;
  securedDebt: string;
  assets: string;
  income: string;
  consent: boolean;
}

const initialState: FormState = {
  name: "",
  phone: "",
  creditDebt: "",
  securedDebt: "",
  assets: "",
  income: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const createLead = useCreateLead();

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
        },
      },
      {
        onSuccess: () => {
          setStatus("success");
          setForm(initialState);
        },
        onError: () => {
          setStatus("error");
        },
      },
    );
  };

  return (
    <section className="zrg-leadform" id="lead-form">
      <div className="zrg-leadform-inner">
        <p className="zrg-leadform-eyebrow">FREE CONSULTATION</p>
        <h2>
          지금 무료로, <strong>나의 채무 상황</strong>을
          <br />
          진단받아 보세요
        </h2>
        <p className="zrg-leadform-sub">
          간단한 정보만 남겨주시면 화민 상담팀이 빠르게 연락드립니다.
        </p>

        <ul className="zrg-leadform-trust">
          <li>
            <span className="zrg-leadform-trust-icon">🔒</span>
            개인정보 안전 보호
          </li>
          <li>
            <span className="zrg-leadform-trust-icon">⚖️</span>
            변호사 직접 상담
          </li>
          <li>
            <span className="zrg-leadform-trust-icon">⏱</span>
            신청 후 빠른 회신
          </li>
        </ul>

        {status === "success" ? (
          <div className="zrg-leadform-success">
            <p>접수가 완료되었습니다.</p>
            <p>영업일 기준 빠르게 담당자가 연락드리겠습니다.</p>
          </div>
        ) : (
          <form className="zrg-leadform-form" onSubmit={handleSubmit}>
            <p className="zrg-leadform-form-title">무료 진단 신청서</p>
            <div className="zrg-leadform-row">
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
            </div>
            <div className="zrg-leadform-row">
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
            </div>
            <div className="zrg-leadform-row">
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
            </div>

            <label className="zrg-leadform-consent">
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
              <p className="zrg-leadform-error">
                이름, 전화번호, 개인정보 동의는 필수입니다. 다시 확인해주세요.
              </p>
            )}

            <button type="submit" className="zrg-leadform-submit" disabled={status === "submitting"}>
              {status === "submitting" ? "전송 중..." : "무료 진단 신청하기"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
