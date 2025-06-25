import { useEffect, useState } from "react";

export default function ResponsiveWrapper(props) {
  const { MobileComponent, DesktopComponent } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileComponent /> : <DesktopComponent />;
}

