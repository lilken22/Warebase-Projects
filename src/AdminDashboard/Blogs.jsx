import ResponsiveWrapper from "../components/ResponsiveWrapper";
import BlogsDesktop from "./BlogsDesktop";
import BlogsMobile from "../components/BlogsMobile";

export default function Blogs() {
  return (
    <ResponsiveWrapper
      MobileComponent={BlogsMobile}
      DesktopComponent={BlogsDesktop}
    />
  );
}