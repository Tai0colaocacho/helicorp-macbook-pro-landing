"use client";

import dynamic from "next/dynamic";
import { Box, Loader2, Monitor, Rotate3D, Smartphone } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

const MacBook3DCanvas = dynamic(() => import("./MacBook3DCanvas"), {
  ssr: false,
  loading: () => <ModelLoadingState />,
});

const BLACK_MODEL_URL = "/models/macbook-pro-14-black.glb";
const SILVER_MODEL_URL = "/models/macbook-pro-16-silver.glb";

export function MacBook3DLoader() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isModelEnabled, setIsModelEnabled] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const query = window.matchMedia("(min-width: 768px)");

    function updateDeviceMode() {
      setIsDesktop(query.matches);
    }

    updateDeviceMode();
    query.addEventListener("change", updateDeviceMode);

    return () => {
      query.removeEventListener("change", updateDeviceMode);
    };
  }, []);

  const activeTheme = resolvedTheme === "dark" ? "dark" : "light";

  const activeModel = useMemo(() => {
    if (activeTheme === "dark") {
        return {
        url: BLACK_MODEL_URL,
        label: "14-inch black",
        };
    }

    return {
        url: SILVER_MODEL_URL,
        label: "16-inch silver",
    };
    }, [activeTheme]);

  if (!mounted) {
    return <ModelFallback label="Preparing interactive preview..." />;
  }

  if (!isDesktop) {
    return (
      <ModelFallback label="Mobile uses a lightweight preview to protect loading speed and PageSpeed score." />
    );
  }

  if (!isModelEnabled) {
    return (
      <div className="flex h-full min-h-[430px] items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:bg-white dark:text-black">
            <Box className="h-7 w-7" />
          </div>

          <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
            Interactive 3D preview is ready.
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#6e6e73] dark:text-neutral-400">
            To keep the first page load fast, the 3D MacBook model is loaded only
            when you choose to open it. Drag the model to rotate after loading.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button type="button" onClick={() => setIsModelEnabled(true)}>
              Load 3D Model
            </Button>

            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-[#6e6e73] dark:border-white/10 dark:bg-white/10 dark:text-neutral-300">
              <Monitor className="h-3.5 w-3.5" />
              Desktop only
            </div>
          </div>

          <p className="mt-5 text-xs text-[#86868b] dark:text-neutral-500">
            Active model: {activeModel.label}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[430px]">
      <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-medium text-[#1d1d1f] shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/50 dark:text-white">
        <Rotate3D className="h-3.5 w-3.5" />
        Drag to rotate
      </div>

      <MacBook3DCanvas key={activeModel.url} modelUrl={activeModel.url} />
    </div>
  );
}

function ModelLoadingState() {
  return (
    <div className="flex h-full min-h-[430px] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-[#1d1d1f] shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/70 dark:text-white">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading 3D experience...
      </div>
    </div>
  );
}

function ModelFallback({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[430px] items-center justify-center p-8">
      <div className="relative w-full max-w-md">
        <div className="mx-auto h-48 w-full rounded-[1.75rem] border-[10px] border-neutral-900 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 shadow-[0_30px_90px_rgba(0,0,0,0.22)] dark:border-neutral-800">
          <div className="flex h-full items-center justify-center">
            <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              MacBook Pro
            </span>
          </div>
        </div>

        <div className="mx-auto h-5 w-[88%] rounded-b-[2rem] bg-gradient-to-r from-neutral-300 via-white to-neutral-400 shadow-[0_18px_45px_rgba(0,0,0,0.18)] dark:from-neutral-700 dark:via-neutral-500 dark:to-neutral-800" />

        <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-medium text-[#6e6e73] dark:border-white/10 dark:bg-white/10 dark:text-neutral-300">
          <Smartphone className="h-3.5 w-3.5" />
          Lightweight fallback
        </div>

        <p className="mx-auto mt-5 max-w-sm text-center text-sm leading-6 text-[#6e6e73] dark:text-neutral-400">
          {label}
        </p>
      </div>
    </div>
  );
}