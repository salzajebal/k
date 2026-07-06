import { useState } from "react";
import { youtubeSlideGroups } from "@/data/content";

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function YoutubeSection() {
  const [group, setGroup] = useState(0);
  const total = youtubeSlideGroups.length;

  return (
    <section className="zrg-youtube" id="youtube">
      <div className="zrg-youtube-inner">
        <div className="zrg-youtube-title zrg-youtube-title-banner">
          <img src={img("subscribe-banner-trimmed.png")} alt="로온TV 구독" />
        </div>

        <div className="zrg-youtube-body">
          <div className="zrg-youtube-player">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Vf6dkTIvirg?autoplay=1&mute=1&controls=0&loop=1&playlist=Vf6dkTIvirg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="zrg-youtube-list">
            <ul>
              {youtubeSlideGroups[group].map((video) => (
                <li key={video.seq}>
                  <a href={video.href} target="_blank" rel="noreferrer">
                    <img src={video.image} alt="유튜브썸네일" />
                  </a>
                  <div className="zrg-youtube-txt">
                    <h1>{video.title}</h1>
                    <span>
                      {video.caption.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="zrg-youtube-dots">
              {Array.from({ length: total }, (_, i) => (
                <span
                  key={i}
                  className={i === group ? "is-active" : ""}
                  role="button"
                  tabIndex={0}
                  onClick={() => setGroup(i)}
                />
              ))}
            </div>
            <div className="zrg-youtube-arrows">
              <button
                type="button"
                aria-label="이전"
                disabled={group === 0}
                onClick={() => setGroup((g) => Math.max(0, g - 1))}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="다음"
                disabled={group === total - 1}
                onClick={() => setGroup((g) => Math.min(total - 1, g + 1))}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
