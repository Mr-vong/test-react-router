import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // บันทึกตำแหน่งการเลื่อนในแต่ละหน้า
    const handleScroll = () => {
      sessionStorage.setItem(location.key, JSON.stringify(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // ลบ Event Listener เมื่อเปลี่ยนหน้า
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    // คืนค่าตำแหน่งการเลื่อนเมื่อเข้าหน้าเดิม
    const scrollPosition = sessionStorage.getItem(location.key);
    if (scrollPosition) {
      window.scrollTo(0, JSON.parse(scrollPosition));
    } else {
      window.scrollTo(0, 0); // หากไม่มีการบันทึก ให้เลื่อนไปด้านบน
    }
  }, [location]);
};

export default useScrollRestoration;
