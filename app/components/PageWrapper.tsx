"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MatrixIntro from "./MatrixIntro";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <MatrixIntro onComplete={() => setReady(true)} />}
      <motion.div
        aria-hidden={!ready}
        className={ready ? undefined : "pointer-events-none"}
        initial={false}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: ready ? 0.6 : 0, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
