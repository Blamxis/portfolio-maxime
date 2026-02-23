import AboutTimelineDesktop from "./AboutTimeLineDesktop";
import AboutTimelineMobile from "./AboutTimeLineMobile";
import AboutTimelineTablet from "./AboutTimelineTablet";

export default function AboutTimeline() {
  return (
    <>
      <AboutTimelineDesktop />
      <AboutTimelineTablet />
      <AboutTimelineMobile />
    </>
  );
}
