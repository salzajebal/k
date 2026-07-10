import { useEffect } from "react";
import { useTrackPageView } from "@workspace/api-client-react";

const VISITOR_ID_KEY = "zrg-visitor-id";
const SESSION_ID_KEY = "zrg-session-id";
const TRACKED_KEY = "zrg-tracked";

function getOrCreateId(storage: Storage, key: string): string {
  const existing = storage.getItem(key);
  if (existing) return existing;
  const id = crypto.randomUUID();
  storage.setItem(key, id);
  return id;
}

export function useVisitorTracking(): void {
  const trackMutation = useTrackPageView();

  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) return;
    if (sessionStorage.getItem(TRACKED_KEY)) return;

    const visitorId = getOrCreateId(localStorage, VISITOR_ID_KEY);
    const sessionId = getOrCreateId(sessionStorage, SESSION_ID_KEY);

    sessionStorage.setItem(TRACKED_KEY, "1");

    trackMutation.mutate({
      data: {
        visitorId,
        sessionId,
        path: window.location.pathname,
        referrer: document.referrer || null,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
