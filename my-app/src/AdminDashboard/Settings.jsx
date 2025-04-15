import ResponsiveWrapper from "../components/ResponsiveWrapper";
import OverviewDesktop from "./OverviewDesktop";
import OverviewMobile from "../components/OverviewMobile";

export default function Overview() {
  return (
    <ResponsiveWrapper
      MobileComponent={OverviewMobile}
      DesktopComponent={OverviewDesktop}
    />
  );
}