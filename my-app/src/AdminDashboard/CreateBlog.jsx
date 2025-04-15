import ResponsiveWrapper from "../components/ResponsiveWrapper";
import CreateBlogDesktop from "./CreateBlogDesktop";
import CreateBlogMobile from "../components/CreateBlogMobile";

export default function Overview() {
  return (
    <ResponsiveWrapper
      MobileComponent={CreateBlogMobile}
      DesktopComponent={CreateBlogDesktop}
    />
  );
}

