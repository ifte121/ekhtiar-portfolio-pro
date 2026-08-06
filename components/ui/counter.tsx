"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({
  end,
  suffix = "",
}: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={2.5}
          suffix={suffix}
        />
      ) : (
        0
      )}
    </div>
  );
}