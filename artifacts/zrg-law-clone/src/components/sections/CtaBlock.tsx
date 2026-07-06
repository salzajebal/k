import { DIAGNOSIS_URL, KAKAO_URL, PHONE } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function CtaBlock() {
  return (
    <section className="zrg-cta">
      <div className="zrg-cta-inner">
        <h2>
          지금, <strong>화민</strong>과 함께
          <br />더 나은 내일을 시작하세요
        </h2>
        <div className="zrg-cta-boxes">
          <a className="zrg-cta-box zrg-cta-kakao" href={KAKAO_URL} target="_blank" rel="noreferrer">
            <img src={img("icon2-zrg_02_new.png")} alt="카카오톡" />
            <span>카카오톡</span>
            <p>실시간 1:1 비밀상담</p>
          </a>
          <a className="zrg-cta-box zrg-cta-diagnosis" href={DIAGNOSIS_URL} target="_blank" rel="noreferrer">
            <img src={img("icon15-zrg.png")} alt="간편무료진단" />
            <span>간편무료진단</span>
            <p>30초면 충분합니다</p>
          </a>
          <a className="zrg-cta-box zrg-cta-call" href={`tel:${PHONE}`}>
            <img src={img("icon5-tel_02.png")} alt="전화상담" />
            <span>전화상담</span>
            <p>{PHONE}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
