// pages/AddPropertyPage.jsx
import ResponsiveWrapper from "../components/ResponsiveWrapper";
import AddPropertyMobile from "../components/AddPropertyMobile";
import AddPropertyDesktop from "./AddPropertyDesktop";


export default function AddPropertyPage() {
  
  return (
    <ResponsiveWrapper
      MobileComponent={AddPropertyMobile}
      DesktopComponent={AddPropertyDesktop}
    />
  );
}

