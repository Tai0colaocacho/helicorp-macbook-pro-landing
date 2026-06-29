"use client";

import { Check, Eye, Heart, Laptop, ShoppingBag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  basePrice,
  chipOptions,
  colorOptions,
  memoryOptions,
  storageOptions,
} from "@/data/products";
import { getStoredValue, setStoredValue } from "@/lib/storage";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ConfiguratorState = {
  color: string;
  chip: string;
  memory: string;
  storage: string;
};

type SavedProduct = ConfiguratorState & {
  id: string;
  name: string;
  price: number;
  createdAt: string;
};

const defaultConfig: ConfiguratorState = {
  color: "space-black",
  chip: "m5",
  memory: "16gb",
  storage: "512gb",
};

const FAVORITES_KEY = "macbook-favorites";
const CART_KEY = "macbook-cart";
const VIEWED_KEY = "macbook-viewed";

function formatUsd(price: number) {
  return `$${new Intl.NumberFormat("en-US").format(price)}`;
}

export function ProductConfigurator() {
  const [config, setConfig] = useState<ConfiguratorState>(defaultConfig);
  const [favorites, setFavorites] = useState<SavedProduct[]>([]);
  const [cart, setCart] = useState<SavedProduct[]>([]);
  const [viewed, setViewed] = useState<SavedProduct[]>([]);

  const selectedColor = colorOptions.find((item) => item.id === config.color);
  const selectedChip = chipOptions.find((item) => item.id === config.chip);
  const selectedMemory = memoryOptions.find((item) => item.id === config.memory);
  const selectedStorage = storageOptions.find(
    (item) => item.id === config.storage
  );

  const totalPrice = useMemo(() => {
    return (
      basePrice +
      (selectedChip?.price ?? 0) +
      (selectedMemory?.price ?? 0) +
      (selectedStorage?.price ?? 0)
    );
  }, [selectedChip, selectedMemory, selectedStorage]);

  const configuredProduct = useMemo<SavedProduct>(() => {
    return {
      ...config,
      id: `${config.color}-${config.chip}-${config.memory}-${config.storage}`,
      name: "MacBook Pro",
      price: totalPrice,
      createdAt: "",
    };
  }, [config, totalPrice]);

  useEffect(() => {
    setFavorites(getStoredValue<SavedProduct[]>(FAVORITES_KEY, []));
    setCart(getStoredValue<SavedProduct[]>(CART_KEY, []));
    setViewed(getStoredValue<SavedProduct[]>(VIEWED_KEY, []));
  }, []);

  useEffect(() => {
    const previousViewed = getStoredValue<SavedProduct[]>(VIEWED_KEY, []);
    const nextViewed = [
      configuredProduct,
      ...previousViewed.filter((item) => item.id !== configuredProduct.id),
    ].slice(0, 3);

    setViewed(nextViewed);
    setStoredValue(VIEWED_KEY, nextViewed);
  }, [configuredProduct]);

  function updateConfig(key: keyof ConfiguratorState, value: string) {
    setConfig((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function addToFavorites() {
    const exists = favorites.some((item) => item.id === configuredProduct.id);

    if (exists) {
      toast.info("This configuration is already in favorites.");
      return;
    }

    const nextProduct = {
      ...configuredProduct,
      createdAt: new Date().toISOString(),
    };

    const nextFavorites = [nextProduct, ...favorites];

    setFavorites(nextFavorites);
    setStoredValue(FAVORITES_KEY, nextFavorites);
    toast.success("Added to favorites.");
  }

  function addToCart() {
    const nextProduct = {
  ...configuredProduct,
  createdAt: new Date().toISOString(),
};

const nextCart = [nextProduct, ...cart];

    setCart(nextCart);
    setStoredValue(CART_KEY, nextCart);
    toast.success("Added to cart.");
  }

  return (
    <section
      id="configurator"
      className="bg-[#f5f5f7] px-6 py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mini Commerce"
          title="Choose your MacBook Pro."
          description="A lightweight configurator with favorites, cart and recently viewed states stored locally for a smoother product experience."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Card className="overflow-hidden rounded-[2rem] bg-black p-0 text-white dark:border-white/10">
            <div className="relative p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#60a5fa_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#a855f7_0%,transparent_38%)] opacity-70" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Laptop className="h-5 w-5" />
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                    {selectedColor?.name}
                  </span>
                </div>

                <div className="mx-auto mt-12 w-full max-w-md">
                  <div className="rounded-t-[2rem] border border-white/10 bg-neutral-950 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                    <div className="flex h-52 flex-col justify-between rounded-t-[1.4rem] bg-[linear-gradient(135deg,#020617,#111827)] p-5">
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <span className="text-xs text-white/50">
                          Configured
                        </span>
                      </div>

                      <div>
                        <p className="text-sm text-white/50">
                          Selected model
                        </p>
                        <h3 className="mt-2 text-3xl font-semibold">
                          MacBook Pro
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "mx-auto h-4 w-[96%] rounded-b-[1.4rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
                      selectedColor?.id === "silver"
                        ? "bg-gradient-to-b from-neutral-200 to-neutral-500"
                        : "bg-gradient-to-b from-neutral-700 to-neutral-950"
                    )}
                  />

                  <div className="mx-auto h-2 w-[28%] rounded-b-xl bg-white/20" />
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <SummaryItem label="Chip" value={selectedChip?.name} />
                  <SummaryItem label="Memory" value={selectedMemory?.name} />
                  <SummaryItem label="Storage" value={selectedStorage?.name} />
                  <SummaryItem
                    label="Price"
                    value={formatUsd(totalPrice)}
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <OptionGroup title="Finish">
              <div className="grid gap-3 sm:grid-cols-2">
                {colorOptions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => updateConfig("color", item.id)}
                    className={cn(
                      "flex items-center justify-between rounded-3xl border bg-white/70 p-4 text-left transition hover:border-black/20 dark:bg-white/[0.06]",
                      config.color === item.id
                        ? "border-[#0071e3] ring-2 ring-[#0071e3]/20"
                        : "border-black/5 dark:border-white/10"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "h-8 w-8 rounded-full border border-black/10",
                          item.className
                        )}
                      />
                      <span className="font-medium text-[#1d1d1f] dark:text-white">
                        {item.name}
                      </span>
                    </span>

                    {config.color === item.id ? (
                      <Check className="h-5 w-5 text-[#0071e3]" />
                    ) : null}
                  </button>
                ))}
              </div>
            </OptionGroup>

            <OptionGroup title="Chip">
              <div className="grid gap-3">
                {chipOptions.map((item) => (
                  <ConfigOption
                    key={item.id}
                    isActive={config.chip === item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    onClick={() => updateConfig("chip", item.id)}
                  />
                ))}
              </div>
            </OptionGroup>

            <OptionGroup title="Memory">
              <div className="grid gap-3 sm:grid-cols-3">
                {memoryOptions.map((item) => (
                  <ConfigOption
                    key={item.id}
                    isActive={config.memory === item.id}
                    title={item.name}
                    price={item.price}
                    onClick={() => updateConfig("memory", item.id)}
                  />
                ))}
              </div>
            </OptionGroup>

            <OptionGroup title="Storage">
              <div className="grid gap-3 sm:grid-cols-3">
                {storageOptions.map((item) => (
                  <ConfigOption
                    key={item.id}
                    isActive={config.storage === item.id}
                    title={item.name}
                    price={item.price}
                    onClick={() => updateConfig("storage", item.id)}
                  />
                ))}
              </div>
            </OptionGroup>

            <Card className="rounded-[2rem]">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  type="button"
                  onClick={addToFavorites}
                  variant="secondary"
                  className="w-full gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Add to Favorites
                </Button>

                <Button
                  type="button"
                  onClick={addToCart}
                  className="w-full gap-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <CommerceStat label="Favorites" value={favorites.length} />
                <CommerceStat label="Cart" value={cart.length} />
                <CommerceStat label="Viewed" value={viewed.length} />
              </div>
            </Card>

            <Card className="rounded-[2rem]">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-[#0071e3]" />
                <h3 className="font-semibold text-[#1d1d1f] dark:text-white">
                  Recently viewed
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                {viewed.length > 0 ? (
                  viewed.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-2xl bg-black/5 px-4 py-3 text-sm dark:bg-white/10"
                    >
                      <span className="text-[#1d1d1f] dark:text-white">
                        {item.chip.toUpperCase()} · {item.memory.toUpperCase()} ·{" "}
                        {item.storage.toUpperCase()}
                      </span>
                      <span className="font-medium text-[#6e6e73] dark:text-neutral-400">
                        {formatUsd(item.price)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[#6e6e73] dark:text-neutral-400">
                    No viewed configurations yet.
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

type OptionGroupProps = {
  title: string;
  children: React.ReactNode;
};

function OptionGroup({ title, children }: OptionGroupProps) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

type ConfigOptionProps = {
  isActive: boolean;
  title: string;
  description?: string;
  price?: number;
  onClick: () => void;
};

function ConfigOption({
  isActive,
  title,
  description,
  price = 0,
  onClick,
}: ConfigOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-3xl border bg-white/70 p-4 text-left transition hover:border-black/20 dark:bg-white/[0.06]",
        isActive
          ? "border-[#0071e3] ring-2 ring-[#0071e3]/20"
          : "border-black/5 dark:border-white/10"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-[#1d1d1f] dark:text-white">
            {title}
          </p>

          {description ? (
            <p className="mt-2 text-sm leading-6 text-[#6e6e73] dark:text-neutral-400">
              {description}
            </p>
          ) : null}
        </div>

        {isActive ? <Check className="h-5 w-5 text-[#0071e3]" /> : null}
      </div>

      <p className="mt-3 text-sm font-medium text-[#6e6e73] dark:text-neutral-400">
        {price > 0 ? `+$${price}` : "Included"}
      </p>
    </button>
  );
}

type SummaryItemProps = {
  label: string;
  value?: string;
};

function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
      <p className="mt-2 font-semibold text-white">{value}</p>
    </div>
  );
}

type CommerceStatProps = {
  label: string;
  value: number;
};

function CommerceStat({ label, value }: CommerceStatProps) {
  return (
    <div className="rounded-2xl bg-black/5 p-4 text-center dark:bg-white/10">
      <p className="text-2xl font-semibold text-[#1d1d1f] dark:text-white">
        {value}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#6e6e73] dark:text-neutral-500">
        {label}
      </p>
    </div>
  );
}