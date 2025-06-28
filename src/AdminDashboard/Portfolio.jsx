import ResponsiveWrapper from "../components/ResponsiveWrapper";
import PortfolioDesktop from "./PortfolioDesktop";
import PortfolioMobile from "../components/PortfolioMobile";

export default function Portfolio() {
  return (
    <ResponsiveWrapper
      MobileComponent={PortfolioMobile}
      DesktopComponent={PortfolioDesktop}
    />
  );
}