import { tickerEntries } from "@/data/content";

export default function Ticker() {
  const loop = [...tickerEntries, ...tickerEntries];

  return (
    <section className="zrg-ticker">
      <div className="zrg-ticker-inner">
        <div className="zrg-ticker-left">
          <div className="zrg-ticker-title1">실시간 상담 접수 현황</div>
          <div className="zrg-ticker-title2">
            하루 평균 상담 건수 <b>87</b>
            <span>건</span>
          </div>
          <div className="zrg-ticker-title3">
            현재 상담 대기
            <div>
              <strong>·</strong>
              <p>원활</p>
            </div>
          </div>
        </div>

        <div className="zrg-ticker-right">
          <div className="zrg-ticker-viewport">
            <div className="zrg-ticker-scroll">
              {loop.map((entry, idx) => (
                <div className="zrg-ticker-row" key={idx}>
                  <div className="zrg-ticker-type">{entry.type}</div>
                  <div className="zrg-ticker-name">{entry.name}</div>
                  <div className={`zrg-ticker-status zrg-status-${entry.statusClass}`}>
                    {entry.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
