import { useEffect, useState, useRef } from "react";

// IntersectionObserver দিয়ে উপাদানের দৃশ্যমানতা ট্র্যাক করার কাস্টম হুক
const useMovementHook = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false); // দৃশ্যমানতার স্টেট
  const ref = useRef(null); // লক্ষ্য উপাদানে রেফারেন্স

  // IntersectionObserver সেটআপ এবং ক্লিনআপ করার জন্য ইফেক্ট
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // প্রথম এন্ট্রি চেক করা
        setIsVisible(entry.isIntersecting); // দৃশ্যমানতার স্টেট আপডেট করা
      },
      { threshold } // থ্রেশহোল্ড কনফিগার করা
    );

    // উপাদানটি যখন মাউন্ট হয়, তখন অবজারভার শুরু করা
    if (ref.current) {
      observer.observe(ref.current);
    }

    // কম্পোনেন্ট আনমাউন্ট হলে অবজারভার ক্লিনআপ করা
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]); // থ্রেশহোল্ড পরিবর্তিত হলে ইফেক্ট পুনরায় চলবে

  return [ref, isVisible]; // রেফারেন্স এবং দৃশ্যমানতা স্টেট রিটার্ন করা
};

export default useMovementHook;
