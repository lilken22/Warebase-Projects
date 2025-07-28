import ResponsiveWrapper from "../components/ResponsiveWrapper";
import SettingsDesktop from "./SettingsDesktop";
import SettingsMobile from "../components/SettingsMobile";

export default function Overview() {
  return (
    <ResponsiveWrapper
      MobileComponent={SettingsMobile}
      DesktopComponent={SettingsDesktop}
    />
  );
}