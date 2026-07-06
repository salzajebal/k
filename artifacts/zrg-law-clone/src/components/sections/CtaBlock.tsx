import { DIAGNOSIS_URL } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function CtaBlock() {
  return (
    <section className="zrg-cta">
      <div className="zrg-cta-inner">
        <h2>
          지금 바로, <strong>화민 로펌</strong>과
          <br />새로운 내일을 준비하세요
        </h2>
        <div className="zrg-cta-boxes">
          <a className="zrg-cta-box zrg-cta-diagnosis" href={DIAGNOSIS_URL} target="_blank" rel="noreferrer">
            <img src={img("icon15-zrg.png")} alt="간편무료진단" />
            <span>간편무료진단</span>
            <p>30초 간편 진단으로 확인</p>
          </a>
        </div>
      </div>
    </section>
  );
}
