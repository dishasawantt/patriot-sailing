import type { ReactNode } from "react";

// App Router re-mounts this on every navigation, so the fade replays as a
// smooth page transition. Opacity only — safe for the sticky pinned scene.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
