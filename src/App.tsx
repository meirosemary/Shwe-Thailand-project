import { useEffect, useState, type ReactNode } from "react";
import { translate, type Locale } from "./translations";

type Product = {
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
  uses: string[];
  variants: {
    name: string;
    format: string;
    amount: string;
    retailPrice: string;
    wholesalePrice: string;
    image: string;
  }[];
  rawMaterial: {
    name: string;
    details: string;
    facts: { label: string; value: string }[];
  };
  procedure: { title: string; details: string }[];
  specifications: { label: string; value: string }[];
};

const products: Product[] = [
  {
    name: "Bio-Carbon & Charcoal",
    shortName: "Bio-Carbon & Charcoal",
    eyebrow: "Export commodity 01",
    description:
      "Finished carbon products prepared for export buyers, distributors, and retail markets in two consistent formats.",
    image:
      "https://images.unsplash.com/photo-1502030818212-8601501607a6?auto=format&fit=crop&w=1200&q=85",
    accent: "bg-[#d9c3a2]",
    uses: ["Export ready", "Finished product", "Wholesale & retail"],
    variants: [
      {
        name: "Hexagon",
        format: "Uniform briquette format",
        amount: "5,000 g",
        retailPrice: "฿420",
        wholesalePrice: "฿380",
        image: "/products/charcoal-2.png",
      },
      {
        name: "Coconut Cubes",
        format: "Dense cube format",
        amount: "1,000 g",
        retailPrice: "฿160",
        wholesalePrice: "฿140",
        image: "/products/charcoal-1.png",
      },
    ],
    rawMaterial: {
      name: "Plum seeds & coconut shell",
      details:
        "Our hexagon bio-carbon is formed from carbonized plum seeds, while coconut cubes use dense coconut-shell charcoal as their primary carbon material.",
      facts: [
        { label: "Source", value: "Hard plum seeds and mature coconut shells selected as the two primary biomass materials." },
        { label: "Selection", value: "Seeds and shells are screened to remove foreign matter, damaged material, and excess moisture." },
        { label: "Preparation", value: "Plum seeds or coconut shells are carbonized, milled, formed into hexagons or cubes, then dried and graded." },
        { label: "Finished quality", value: "Density, moisture, ash, size, and structural strength influence lighting and burn performance." },
      ],
    },
    procedure: [
      { title: "Material receiving", details: "Plum seeds or coconut shells are received, cleaned, inspected, and prepared for processing." },
      { title: "Carbonizing & milling", details: "Material is carbonized under restricted oxygen, cooled, and milled to a controlled particle size." },
      { title: "Forming", details: "Prepared carbon is compressed into uniform hexagonal briquettes or coconut charcoal cubes." },
      { title: "Drying & grading", details: "Formed pieces are dried, screened for size and integrity, and cleared of excess fines." },
      { title: "Packing", details: "Finished products are weighed, sealed, coded, and prepared for export handling." },
    ],
    specifications: [
      { label: "Available types", value: "Hexagon & Coconut Cubes" },
      { label: "Supply options", value: "Wholesale export & retail distribution" },
      { label: "Packaging", value: "Sealed inner packs and export cartons" },
    ],
  },
  {
    name: "Coconut Milk",
    shortName: "Coconut Milk",
    eyebrow: "Export commodity 02",
    description:
      "Commercial coconut milk supplied as shelf-stable finished products for wholesale buyers and retail distribution.",
    image:
      "https://images.unsplash.com/photo-1554444510-592779e6e009?auto=format&fit=crop&w=1200&q=85",
    accent: "bg-[#f2d98d]",
    uses: ["Shelf stable", "Finished product", "Wholesale & retail"],
    variants: [
      {
        name: "Commercial UHT",
        format: "Aseptic commercial pack",
        amount: "1,000 ml",
        retailPrice: "฿135",
        wholesalePrice: "฿115",
        image: "/products/coconut-2.png",
      },
      {
        name: "Canned A10",
        format: "Large food-industry can",
        amount: "2,900 ml",
        retailPrice: "฿300",
        wholesalePrice: "฿270",
        image: "/products/coconut-1.png",
      },
    ],
    rawMaterial: {
      name: "Mature coconut kernel",
      details:
        "Coconut milk is produced primarily from the white edible kernel of mature coconuts and water. Kernel maturity supports natural richness and texture.",
      facts: [
        { label: "Source", value: "Fully matured coconuts with developed white kernel suitable for milk extraction." },
        { label: "Selection", value: "Coconuts are inspected before the kernel is separated, trimmed, and washed." },
        { label: "Preparation", value: "Clean kernel is ground, pressed with water, filtered, and homogenized." },
        { label: "Finished quality", value: "Controlled heat treatment and sealing support consistency and shelf stability." },
      ],
    },
    procedure: [
      { title: "Coconut receiving", details: "Mature coconuts are inspected for maturity, damage, and signs of spoilage." },
      { title: "Kernel preparation", details: "Husk and shell are removed before the white kernel is trimmed and washed." },
      { title: "Extraction", details: "Prepared kernel is ground and pressed with controlled water to extract coconut milk." },
      { title: "Filtering & homogenizing", details: "Extracted liquid is filtered and homogenized for a smooth, even consistency." },
      { title: "UHT or can processing", details: "Product is heat treated and filled into aseptic commercial packs or A10 cans." },
      { title: "Final inspection", details: "Seals, fill volume, coding, and pack appearance are checked before dispatch." },
    ],
    specifications: [
      { label: "Available types", value: "Commercial UHT & Canned A10" },
      { label: "Supply options", value: "Wholesale export & retail distribution" },
      { label: "Packaging", value: "Aseptic packs and sealed A10 cans" },
    ],
  },
  {
    name: "Salts",
    shortName: "Salts",
    eyebrow: "Export commodity 03",
    description:
      "Refined and industrial salt products graded, finished, and packed for international wholesale and distribution markets.",
    image:
      "https://images.unsplash.com/photo-1592907677605-d42ffee99d05?auto=format&fit=crop&w=1200&q=85",
    accent: "bg-[#e9e1d3]",
    uses: ["Export ready", "Graded product", "Wholesale & retail"],
    variants: [
      {
        name: "Refined Food Grade",
        format: "Iodized, clean crystal grade",
        amount: "1,000 g",
        retailPrice: "฿65",
        wholesalePrice: "฿52",
        image: "/products/salt-1.png",
      },
      {
        name: "Industrial",
        format: "Application-specific grade",
        amount: "25,000 g",
        retailPrice: "฿630",
        wholesalePrice: "฿560",
        image: "/products/salt-3.png",
      },
    ],
    rawMaterial: {
      name: "Natural salt water or brine",
      details:
        "The primary material is sodium-chloride-rich seawater or natural brine. Our refined food-grade salt is iodized; industrial salt is supplied separately for non-food applications.",
      facts: [
        { label: "Source", value: "Naturally occurring seawater or underground brine with dissolved mineral salt." },
        { label: "Selection", value: "Source material is checked for cleanliness and suitability before evaporation and refining." },
        { label: "Preparation", value: "Water is evaporated before salt is washed, dried, refined, and graded." },
        { label: "Iodization", value: "A controlled iodine compound is added to the refined food-grade salt; this does not apply to the industrial product." },
        { label: "Finished quality", value: "Purity, moisture, crystal size, and intended grade are checked before packing." },
      ],
    },
    procedure: [
      { title: "Brine receiving", details: "Salt water or concentrated brine is checked before entering production." },
      { title: "Evaporation", details: "Water is removed through solar or controlled evaporation until crystals form." },
      { title: "Washing & refining", details: "Crystals are cleaned and refined according to the intended food or industrial grade." },
      { title: "Drying & grading", details: "Salt is dried, sieved, and separated into consistent crystal specifications." },
      { title: "Final packing", details: "Finished salt is inspected, weighed, sealed, coded, and prepared for dispatch." },
    ],
    specifications: [
      { label: "Available types", value: "Refined Food Grade (Iodized) & Industrial" },
      { label: "Supply options", value: "Wholesale export & retail distribution" },
      { label: "Packaging", value: "Sealed sacks and market-ready packs" },
    ],
  },
];

const articles = [
  {
    category: "Our material",
    title: "From plum harvest to useful bio-carbon",
    excerpt:
      "The hard seed inside a plum can become a valuable carbon material instead of being overlooked.",
    image:
      "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?auto=format&fit=crop&w=1200&q=85",
    body:
      "Plum seeds are naturally hard and dense. We collect and prepare them as the primary biomass for our hexagonal bio-carbon. After cleaning and moisture reduction, the seeds are carbonized in a restricted-oxygen environment. The resulting carbon material is milled and formed into a consistent finished shape. This gives an agricultural material a practical second purpose.",
  },
  {
    category: "Why it is different",
    title: "Why dense plum seeds make a distinctive base",
    excerpt:
      "Material density and controlled preparation give plum-seed carbon its own product character.",
    image:
      "https://images.unsplash.com/photo-1502030818212-8601501607a6?auto=format&fit=crop&w=1200&q=85",
    body:
      "Unlike ordinary wood pieces, plum seeds begin as compact fruit stones. Their density makes them suitable for conversion into a uniform carbon feedstock. We control cleaning, carbonization, particle size, forming, and drying to produce consistent hexagonal pieces. Final performance still depends on verified moisture, ash, fixed-carbon, and burn-test results, which should be confirmed in the applicable laboratory report.",
  },
  {
    category: "Our procedure",
    title: "Five controlled steps from seed to finished charcoal",
    excerpt:
      "A clear production path helps turn cleaned plum seeds into export-ready hexagonal bio-carbon.",
    image:
      "https://images.unsplash.com/photo-1627544282015-38a64d2ce8c1?auto=format&fit=crop&w=1200&q=85",
    body:
      "The process begins with receiving and sorting plum seeds. They are cleaned and dried before controlled carbonization. The carbonized material is cooled, milled to a defined particle size, and compressed into hexagonal form. Finished pieces are dried, graded, checked, weighed, and sealed for distribution. Exact production controls and specifications may vary by grade and equipment.",
  },
  {
    category: "Serving ideas",
    title: "Five snacks to make with coconut milk",
    excerpt:
      "Turn rich coconut milk into simple sweet and savoury snacks for retail menus or home kitchens.",
    image:
      "https://images.unsplash.com/photo-1551266080-616f5d8174f1?auto=format&fit=crop&w=1200&q=85",
    body:
      "Use coconut milk for mango sticky rice, coconut pudding, chilled coconut jelly, banana-and-coconut bites, or soft coconut pancakes. It also works in steamed rice cakes and creamy dipping sauces. Commercial UHT packs suit regular kitchen use, while A10 cans are practical for larger batches. Recipes should be adjusted to the product's declared fat content and consistency.",
  },
  {
    category: "Nutrition information",
    title: "Why iodized food-grade salt matters",
    excerpt:
      "Iodized salt combines everyday seasoning with a reliable dietary source of iodine.",
    image:
      "https://images.unsplash.com/photo-1634612831148-03a8550e1d52?auto=format&fit=crop&w=1200&q=85",
    body:
      "Iodine is an essential nutrient used by the body to make thyroid hormones, which support normal metabolism, growth, and development. Using properly iodized food-grade salt can help reduce the risk of iodine deficiency when consumed as part of a balanced diet. Salt should still be used in moderation. This benefit applies only to our labeled iodized food-grade salt—industrial salt is not intended for consumption.",
  },
];

type Translator = (value: string) => string;

function localizeProduct(product: Product, t: Translator): Product {
  return {
    ...product,
    name: t(product.name),
    shortName: t(product.shortName),
    eyebrow: t(product.eyebrow),
    description: t(product.description),
    uses: product.uses.map(t),
    variants: product.variants.map((variant) => ({
      ...variant,
      name: t(variant.name),
      format: t(variant.format),
    })),
    rawMaterial: {
      name: t(product.rawMaterial.name),
      details: t(product.rawMaterial.details),
      facts: product.rawMaterial.facts.map(({ label, value }) => ({
        label: t(label),
        value: t(value),
      })),
    },
    procedure: product.procedure.map(({ title, details }) => ({
      title: t(title),
      details: t(details),
    })),
    specifications: product.specifications.map(({ label, value }) => ({
      label: t(label),
      value: t(value),
    })),
  };
}

function localizeArticle<T extends (typeof articles)[number]>(
  article: T,
  t: Translator,
): T {
  return {
    ...article,
    category: t(article.category),
    title: t(article.title),
    excerpt: t(article.excerpt),
    body: t(article.body),
  };
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ModalShell({
  title,
  closeLabel,
  onClose,
  children,
}: {
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071525]/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[1.5rem] bg-[#f4ecdf] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#112a46]/10 px-5 py-4">
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#a47622]">
              Shwe Thailand
            </p>
            <h2 className="mt-1 text-sm font-extrabold text-[#112a46]">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="flex size-10 items-center justify-center rounded-full border border-[#112a46]/15 text-[#112a46] transition hover:bg-[#112a46] hover:text-white"
          >
            <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16">
              <path
                d="m3 3 10 10M13 3 3 13"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function PlaceholderLineQr({ label }: { label: string }) {
  const finderOrigins = [
    [1, 1],
    [15, 1],
    [1, 15],
  ];

  return (
    <svg
      aria-label={label}
      className="aspect-square w-full"
      viewBox="0 0 23 23"
      shapeRendering="crispEdges"
    >
      <rect width="23" height="23" rx="1.5" fill="white" />
      {Array.from({ length: 21 * 21 }, (_, index) => {
        const x = index % 21;
        const y = Math.floor(index / 21);
        const insideFinder =
          (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
        const filled = (x * 3 + y * 5 + x * y) % 7 < 3;
        if (insideFinder || !filled) return null;
        return <rect key={index} x={x + 1} y={y + 1} width="1" height="1" fill="#112a46" />;
      })}
      {finderOrigins.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" fill="#112a46" />
          <rect x={x + 1} y={y + 1} width="5" height="5" fill="white" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill="#112a46" />
        </g>
      ))}
    </svg>
  );
}

function ProductCard({
  product,
  t,
  onLineClick,
}: {
  product: Product;
  t: Translator;
  onLineClick: () => void;
}) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const variants = product.variants ?? [];
  const safeVariantIndex =
    selectedVariantIndex < variants.length ? selectedVariantIndex : 0;
  const selectedVariant = variants[safeVariantIndex];

  useEffect(() => {
    setSelectedVariantIndex(0);
  }, [product.name]);

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#112a46] text-white shadow-md">
      <div className="h-64 overflow-hidden bg-black/5 sm:h-80">
        <img
          src={product.image}
          alt={`${product.name} ${t("product category")}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
            {product.eyebrow}
          </span>
          <button
            type="button"
            onClick={onLineClick}
            className="inline-flex items-center gap-2 rounded-full bg-[#f4c95d] px-4 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#112a46] transition hover:bg-white"
          >
            {t("Bulk orders · LINE")} <ArrowIcon />
          </button>
        </div>
        <h3 className="font-display text-[2rem] leading-tight sm:text-[2.35rem]">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-200 opacity-90">{product.description}</p>
        <div className="mt-5 grid grid-rows-[1fr]">
          <div className="overflow-hidden">
            <ul className="flex flex-wrap gap-2 border-t border-current/20 pt-4">
              {product.uses.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-current/25 px-3 py-1.5 text-[11px] font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <div className="flex items-end justify-between gap-3">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] opacity-55">
                  {t("Available products")}
                </p>
                <div className="text-right">
                  <span className="block text-[9px] uppercase tracking-wider opacity-50">
                    {t("Selected prices · THB")}
                  </span>
                  {selectedVariant && (
                    <div className="mt-1 flex items-center justify-end gap-3" aria-live="polite">
                      <span>
                        <span className="block text-[8px] uppercase text-white/45">
                          {t("Retail")}
                        </span>
                        <span className="text-sm font-extrabold text-white">
                          {selectedVariant.retailPrice}
                        </span>
                      </span>
                      <span className="h-7 w-px bg-white/15" />
                      <span>
                        <span className="block text-[8px] uppercase text-white/45">
                          {t("Wholesale")}
                        </span>
                        <span className="text-sm font-extrabold text-[#f4c95d]">
                          {selectedVariant.wholesalePrice}
                        </span>
                      </span>
                    </div>
                  )}
                  {selectedVariant && (
                    <span className="mt-1 block text-[8px] text-white/40">
                      {t("per")} {selectedVariant.amount}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {variants.map((variant, variantIndex) => (
                  <button
                    type="button"
                    onClick={() => setSelectedVariantIndex(variantIndex)}
                    aria-pressed={safeVariantIndex === variantIndex}
                    aria-label={`${t("Select")} ${variant.name}`}
                    key={variant.name}
                    className={`overflow-hidden rounded-xl border p-2 text-left transition ${
                      safeVariantIndex === variantIndex
                        ? "border-[#f4c95d] bg-white/20 ring-1 ring-[#f4c95d]"
                        : "border-white/15 bg-white/8 hover:bg-white/15"
                    }`}
                  >
                    <div className="mb-1.5 aspect-square rounded-lg bg-[#f4ecdf]">
                      <img
                        src={variant.image}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-xs font-extrabold">{variant.name}</p>
                    <p className="mt-1 text-[9px] leading-relaxed opacity-70">
                      {variant.format}
                    </p>
                    <div className="mt-2 border-t border-white/10 pt-2">
                      <span className="block text-[10px] font-bold text-white/65">
                        {variant.amount}
                      </span>
                      <div className="mt-2 grid grid-cols-2 gap-1.5">
                        <span className="rounded-lg bg-white/10 px-2 py-1.5">
                          <span className="block text-[7px] uppercase tracking-wider text-white/45">
                            {t("Retail")}
                          </span>
                          <span className="text-[11px] font-extrabold">
                            {variant.retailPrice}
                          </span>
                        </span>
                        <span className="rounded-lg bg-[#f4c95d]/15 px-2 py-1.5">
                          <span className="block text-[7px] uppercase tracking-wider text-white/45">
                            {t("Wholesale")}
                          </span>
                          <span className="text-[11px] font-extrabold text-[#f4c95d]">
                            {variant.wholesalePrice}
                          </span>
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={onLineClick}
                className="mt-3 flex w-full items-center justify-between rounded-xl border border-[#f4c95d]/30 bg-[#f4c95d]/10 px-4 py-3 text-left transition hover:bg-[#f4c95d]/20"
              >
                <span>
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#f4c95d]">
                    {t("Buying in bulk?")}
                  </span>
                  <span className="mt-1 block text-[9px] leading-relaxed text-white/60">
                    {t("Contact us directly on LINE for volume availability.")}
                  </span>
                </span>
                <ArrowIcon />
              </button>
            </div>
            <div className="mt-4 rounded-2xl border border-[#f4c95d]/35 bg-[#f4c95d]/10 px-4 py-1">
              <p className="border-b border-white/10 py-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#f4c95d]">
                {t("Product essentials")}
              </p>
              <dl className="divide-y divide-white/10">
                {product.specifications.map(({ label, value }) => (
                  <div
                    key={label}
                    className="grid grid-cols-[.9fr_1.4fr] gap-3 py-3 text-xs leading-relaxed"
                  >
                    <dt className="font-semibold text-white/50">{label}</dt>
                    <dd className="font-bold leading-5 text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f4c95d] text-[#112a46]">
                  <svg
                    aria-hidden="true"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 17V8m0 5c-3.7 0-6-2.2-6-6 3.8 0 6 2.3 6 6Zm0 1.5c3.7 0 6-2.2 6-6-3.8 0-6 2.3-6 6Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] opacity-50">
                    {t("Primary raw material")}
                  </p>
                  <h4 className="mt-1 text-sm font-extrabold">
                    {product.rawMaterial.name}
                  </h4>
                  <p className="mt-2 text-[11px] leading-relaxed opacity-80">
                    {product.rawMaterial.details}
                  </p>
                </div>
              </div>
              <dl className="mt-4 divide-y divide-white/10 border-t border-white/10">
                {product.rawMaterial.facts.map(({ label, value }) => (
                  <div key={label} className="grid gap-1 py-3 sm:grid-cols-[5rem_1fr]">
                    <dt className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#f4c95d]">
                      {label}
                    </dt>
                    <dd className="text-[10px] leading-relaxed text-white/75">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#f4c95d]">
                      {t("Typical production procedure")}
                    </p>
                    <p className="mt-1 text-[9px] leading-relaxed text-white/50">
                      {t("From primary material to finished, sealed product")}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold text-white/40">
                    {product.procedure.length} {t("steps")}
                  </span>
                </div>
                <ol className="mt-4 space-y-0">
                  {product.procedure.map((step, stepIndex) => (
                    <li
                      key={step.title}
                      className="relative grid grid-cols-[2rem_1fr] gap-3 pb-4 last:pb-0"
                    >
                      {stepIndex < product.procedure.length - 1 && (
                        <span className="absolute bottom-0 left-[0.94rem] top-7 w-px bg-white/15" />
                      )}
                      <span className="relative z-10 flex size-8 items-center justify-center rounded-full border border-[#f4c95d]/50 bg-[#112a46] text-[9px] font-extrabold text-[#f4c95d]">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-0.5">
                        <h5 className="text-[11px] font-extrabold">
                          {step.title}
                        </h5>
                        <p className="mt-1 text-[10px] leading-relaxed text-white/70">
                          {step.details}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 rounded-xl border border-[#f4c95d]/20 bg-[#f4c95d]/10 px-3 py-2.5 text-[9px] leading-relaxed text-white/70">
                  {t(
                    "The exact procedure and product specification may vary by product grade, equipment, recipe, and regulatory requirements.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const savedLocale = window.localStorage.getItem("shwe-thailand-locale");
    return savedLocale === "my" || savedLocale === "th" ? savedLocale : "en";
  });
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeDocument, setActiveDocument] = useState<{
    label: string;
    href: string;
  } | null>(null);
  const [lineQrOpen, setLineQrOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<number | null>(0);
  const t: Translator = (value) => translate(locale, value);
  const localizedProducts = products.map((product) => localizeProduct(product, t));
  const localizedArticles = articles.map((article) => localizeArticle(article, t));
  const safeActiveProduct =
    localizedProducts[activeProduct] !== undefined ? activeProduct : 0;

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("shwe-thailand-locale", locale);
  }, [locale]);

  return (
    <main className="min-h-screen bg-[#f4ecdf] text-[#10263f]">
      {/* Navigation Bar matching the exact Figma Make aesthetic */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-3.5" aria-label="Shwe Thailand home">
          {/* Circular Emblem with Leaf Icon / Logo Image */}
          <div className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-[#112a46] text-[#f4c95d] shadow-sm">
            <img
              src="/logo.png"
              alt="Shwe Thailand Logo"
              className="h-7 w-7 object-contain"
              onError={(e) => {
                // If logo.png isn't available yet, fallback to the elegant leaf icon
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.parentElement?.querySelector(".fallback-icon");
                if (fallback) (fallback as HTMLElement).style.display = "block";
              }}
            />
            <svg
              className="fallback-icon hidden size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 4c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7Zm0 3c4.5 0 7-2.5 7-7-4.5 0-7 2.5-7 7Z" />
            </svg>
          </div>
          <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#112a46]">
            SHWE THAILAND
          </span>
        </a>

        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-wider lg:flex">
          <a className="transition hover:text-[#b1832f]" href="#products">
            {t("Products")}
          </a>
          <a className="transition hover:text-[#b1832f]" href="#insights">
            {t("Insights")}
          </a>
          <a className="transition hover:text-[#b1832f]" href="#company">
            {t("Company")}
          </a>
          <a className="transition hover:text-[#b1832f]" href="#quality">
            {t("Our standard")}
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex rounded-full border border-[#10263f]/15 bg-white/35 p-1"
            role="group"
            aria-label={t("Choose language")}
          >
            {(
              [
                ["en", "EN"],
                ["my", "မြန်မာ"],
                ["th", "ไทย"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setLocale(value)}
                aria-pressed={locale === value}
                className={`rounded-full px-2.5 py-1.5 text-[9px] font-extrabold transition sm:px-3 ${
                  locale === value
                    ? "bg-[#112a46] text-white"
                    : "text-[#536172] hover:bg-white/70"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setLineQrOpen(true)}
            className="hidden rounded-full border border-[#10263f]/20 px-4 py-2.5 text-xs font-bold transition hover:border-[#112a46] hover:bg-[#112a46] hover:text-white sm:block"
          >
            {t("Contact on LINE")}
          </button>
        </div>
      </nav>

      {/* Hero Header with Comfortable Line Spacing */}
      <header className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:items-end md:pt-16 lg:px-10 lg:pb-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b1832f]">
            <span className="h-px w-8 bg-current" />
            {t("Three export commodities. One trusted brand.")}
          </p>
          <h1 className="font-display max-w-3xl text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.04em]">
            {t("Good things,")}
            <br />
            <span className="italic text-[#c3973d]">{t("naturally.")}</span>
          </h1>
        </div>
        <div className="md:max-w-md md:justify-self-end">
          <p className="text-base leading-relaxed text-[#536172] sm:text-lg">
            {t(
              "An informational catalog of finished export commodities for wholesale buyers and retail distribution.",
            )}
          </p>
          <a
            href="#products"
            className="mt-7 inline-flex items-center gap-3 border-b border-[#10263f] pb-2 text-xs font-extrabold uppercase tracking-[0.15em]"
          >
            {t("Explore our range")} <ArrowIcon />
          </a>
        </div>
      </header>

      {/* Product Section */}
      <section id="products" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#a47622]">
              {t("Reference film")}
            </p>
            <p className="text-right text-[9px] text-[#657080]">
              {t("Muted · Autoplay · Loop")}
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-[#112a46] shadow-sm">
            <iframe
              src="https://www.youtube-nocookie.com/embed/Scxs7L0vhZ4?autoplay=1&mute=1&loop=1&playlist=Scxs7L0vhZ4&controls=0&modestbranding=1&playsinline=1&rel=0"
              title={t("Natural products reference film")}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-[#112a46]/85 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {t("Replace with official Shwe Thailand film")}
            </div>
          </div>
        </div>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#b1832f]">
              {t("Product information")}
            </p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl leading-tight">
              {t("Export commodity catalog")}
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-[#657080] sm:block">
            {t("Select a tab to view product types, raw materials, and procedures.")}
          </p>
        </div>
        <div
          className="mb-4 grid gap-2 rounded-[1.5rem] border border-[#112a46]/10 bg-white/35 p-2 md:grid-cols-3"
          role="tablist"
          aria-label={t("Export commodity categories")}
        >
          {localizedProducts.map((product, index) => (
            <button
              key={product.name}
              type="button"
              role="tab"
              aria-selected={safeActiveProduct === index}
              aria-controls="active-product-panel"
              onClick={() => setActiveProduct(index)}
              className={`rounded-2xl px-4 py-4 text-left transition ${
                safeActiveProduct === index
                  ? "bg-[#112a46] text-white shadow-sm"
                  : "text-[#112a46] hover:bg-white/70"
              }`}
            >
              <span className="block text-[9px] font-extrabold uppercase tracking-[0.16em] opacity-50">
                0{index + 1}
              </span>
              <span className="mt-1 block text-xs font-extrabold leading-5">
                {product.shortName}
              </span>
              <span
                className={`mt-1 block text-[9px] leading-relaxed ${
                  safeActiveProduct === index ? "text-white/55" : "text-[#657080]"
                }`}
              >
                {product.specifications[0].value}
              </span>
            </button>
          ))}
        </div>
        <div id="active-product-panel" role="tabpanel" className="mx-auto max-w-3xl">
          <ProductCard
            key={`${locale}-${localizedProducts[safeActiveProduct].name}`}
            product={localizedProducts[safeActiveProduct]}
            t={t}
            onLineClick={() => setLineQrOpen(true)}
          />
        </div>
      </section>

      {/* Insights Section */}
      <section
        id="insights"
        className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10 lg:pt-20"
      >
        <div className="mb-7 grid gap-5 md:grid-cols-[.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#b1832f]">
              {t("Product insights")}
            </p>
            <h2 className="font-display mt-2 text-4xl leading-tight sm:text-5xl">
              {t("Stories, uses")}
              <br />
              {t("& benefits.")}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#536172] md:justify-self-end">
            {t(
              "Learn what makes our plum-seed bio-carbon distinctive, discover snack ideas using coconut milk, and understand the role of our iodized food-grade salt.",
            )}
          </p>
        </div>
        <div className="mb-3 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.14em] text-[#a47622]">
          <span className="h-px w-8 bg-current" />
          {t("Swipe or scroll to explore")}
        </div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
          {localizedArticles.map((article, index) => {
            const expanded = activeArticle === index;
            return (
              <article
                key={article.title}
                className={`w-[82vw] max-w-[23rem] shrink-0 snap-start self-start overflow-hidden rounded-[1.5rem] border transition ${
                  expanded
                    ? "border-[#c3973d] bg-[#112a46] text-white"
                    : "border-[#112a46]/10 bg-white/35 text-[#112a46]"
                }`}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p
                    className={`text-[9px] font-extrabold uppercase tracking-[0.18em] ${
                      expanded ? "text-[#f4c95d]" : "text-[#a47622]"
                    }`}
                  >
                    {article.category}
                  </p>
                  <h3 className="font-display mt-2 text-2xl leading-tight">
                    {article.title}
                  </h3>
                  <p className={`mt-3 text-xs leading-relaxed ${expanded ? "text-white/75" : "text-[#657080]"}`}>
                    {article.excerpt}
                  </p>
                  <div
                    className={`grid transition-all duration-300 ${
                      expanded ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden text-[11px] leading-relaxed text-white/75">
                      {article.body}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveArticle(expanded ? null : index)}
                    aria-expanded={expanded}
                    className={`mt-5 inline-flex items-center gap-2 border-b pb-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] ${
                      expanded
                        ? "border-[#f4c95d] text-[#f4c95d]"
                        : "border-[#112a46] text-[#112a46]"
                    }`}
                  >
                    {expanded ? t("Close story") : t("Read story")}
                    <span className={expanded ? "-rotate-90" : "rotate-90"}>
                      <ArrowIcon />
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Company Profile Section */}
      <section
        id="company"
        className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10 lg:pt-20"
      >
        <div className="overflow-hidden rounded-[2rem] bg-[#e4d5bb]">
          <div className="grid md:grid-cols-[.85fr_1.15fr]">
            <div className="relative min-h-72 overflow-hidden md:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?auto=format&fit=crop&w=1400&q=85"
                alt={t("Packaged finished goods organized in a distribution warehouse")}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#112a46]">
                {t("Ready for market")}
              </p>
            </div>
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#a47622]">
                {t("Company profile")}
              </p>
              <h2 className="font-display mt-3 text-4xl leading-[1.08] sm:text-5xl">
                {t("From product")}
                <br />
                {t("to shelf.")}
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#45566a] sm:text-base">
                {t(
                  "Shwe Thailand offers a focused range of fully finished, packaged products for retail and wholesale buyers. Every item is supplied in its final pack, ready for resale and use.",
                )}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#45566a]">
                {t(
                  "Our compact product portfolio allows us to maintain clear product information, consistent specifications, and dependable export order coordination.",
                )}
              </p>
              <div className="mt-7">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#a47622]">
                  {t("Company documents")}
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {[
                    {
                      label: "Company profile",
                      href: "/company-profile.pdf",
                      embedded: false,
                    },
                    {
                      label: "Certifications",
                      href: "/company-certifications.pdf",
                      embedded: true,
                    },
                    {
                      label: "Lab results",
                      href: "/lab-results.pdf",
                      embedded: true,
                    },
                  ].map((document) =>
                    document.embedded ? (
                    <button
                      type="button"
                      key={document.label}
                      onClick={() =>
                        setActiveDocument({
                          label: document.label,
                          href: document.href,
                        })
                      }
                      className="group flex min-h-20 flex-col justify-between rounded-2xl border border-[#112a46]/15 bg-white/45 p-3.5 text-[#112a46] transition hover:border-[#112a46] hover:bg-[#112a46] hover:text-white"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <svg
                          aria-hidden="true"
                          className="size-5"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5 2.5h6l4 4v11H5v-15Zm6 0v4h4M8 11h4M8 14h4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.4"
                          />
                        </svg>
                        <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#a47622] group-hover:text-[#f4c95d]">
                          {t("View PDF")}
                        </span>
                      </div>
                      <span className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.08em]">
                        {t(document.label)}
                      </span>
                    </button>
                    ) : (
                      <a
                        key={document.label}
                        href={document.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex min-h-20 flex-col justify-between rounded-2xl border border-[#112a46]/15 bg-white/45 p-3.5 text-[#112a46] transition hover:border-[#112a46] hover:bg-[#112a46] hover:text-white"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <svg
                            aria-hidden="true"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M5 2.5h6l4 4v11H5v-15Zm6 0v4h4M8 11h4M8 14h4"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.4"
                            />
                          </svg>
                          <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#a47622] group-hover:text-[#f4c95d]">
                            {t("View PDF")}
                          </span>
                        </div>
                        <span className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.08em]">
                          {t(document.label)}
                        </span>
                      </a>
                    ),
                  )}
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Focused", "A specialized three-product range"],
                  ["Finished", "Sealed products ready for resale"],
                  ["Responsive", "Clear ordering and delivery support"],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-black/10 bg-white/35 p-4"
                  >
                    <h3 className="text-xs font-extrabold">{t(title)}</h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-[#5d6876]">
                      {t(copy)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section
        id="quality"
        className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-[.85fr_1.15fr] md:items-center lg:px-10 lg:py-20"
      >
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#b1832f]">
            {t("Simple by design")}
          </p>
          <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
            {t("Quality you can")}
            <br />
            {t("count on.")}
          </h2>
        </div>
        <div className="grid grid-cols-3 divide-x divide-black/15 border-y border-black/15 py-6">
          {[
            ["01", "Finished", "Products supplied in their final packaging"],
            ["02", "Quality", "Pack details confirmed before ordering"],
            ["03", "Delivery", "Retail and wholesale orders coordinated clearly"],
          ].map(([number, label, description]) => (
            <div key={number} className="px-3 sm:px-6">
              <span className="text-[10px] font-bold text-[#b1832f]">{number}</span>
              <p className="mt-2 text-xs font-bold leading-5 sm:text-sm">
                {t(label)}
              </p>
              <p className="mt-1 hidden text-[11px] leading-relaxed text-[#687382] sm:block">
                {t(description)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="bg-[#112a46] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
              {t("Wholesale · Retail")}
            </p>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl leading-tight">
              {t("Buying in bulk?")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {t("Contact us directly on LINE for larger-volume orders.")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLineQrOpen(true)}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#f4c95d] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#10263f] transition hover:bg-white"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.5 9c0 3.3-3 6-6.7 6-.7 0-1.4-.1-2-.3L4 17l1.1-3.4A5.7 5.7 0 0 1 3 9c0-3.3 3-6 6.7-6s6.8 2.7 6.8 6Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
            </svg>
            {t("Contact us on LINE")}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#112a46] px-5 pb-7 text-white/45 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-wider">
          <span className="normal-case tracking-normal">
            {locale === "my"
              ? "© ၂၀၂၆ ရွှေထိုင်း ကုမ္ပဏီ လီမိတက်"
              : locale === "th"
                ? "© 2026 บริษัท ชเว ไทยแลนด์ จำกัด"
                : "© 2026 Shwe Thailand Co., Ltd."}
          </span>
          <span>{t("Bio-Carbon & Charcoal · Coconut Milk · Salts")}</span>
        </div>
      </footer>

      {/* PDF Modal */}
      {activeDocument && (
        <ModalShell
          title={t(activeDocument.label)}
          closeLabel={`${t("Close")} ${t(activeDocument.label)}`}
          onClose={() => setActiveDocument(null)}
        >
          <div className="min-h-0 flex-1 bg-[#d9cdbb] p-2 sm:p-4">
            <iframe
              src={`${activeDocument.href}#view=FitH`}
              title={`${t(activeDocument.label)} PDF`}
              className="h-[72vh] w-full rounded-xl border-0 bg-white"
            />
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-[#112a46]/10 px-5 py-3">
            <p className="text-[9px] leading-relaxed text-[#657080]">
              {t("PDF preview · Use the viewer controls to zoom or print.")}
            </p>
            <a
              href={activeDocument.href}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-[9px] font-extrabold uppercase tracking-wider text-[#a47622] hover:text-[#112a46]"
            >
              {t("Open full PDF")}
            </a>
          </div>
        </ModalShell>
      )}

      {/* LINE QR Modal */}
      {lineQrOpen && (
        <ModalShell
          title={t("Contact on LINE")}
          closeLabel={`${t("Close")} ${t("Contact on LINE")}`}
          onClose={() => setLineQrOpen(false)}
        >
          <div className="mx-auto w-full max-w-md px-6 py-8 text-center sm:px-10">
            <div className="mx-auto w-full max-w-64 rounded-[1.75rem] border border-[#112a46]/10 bg-white p-4 shadow-sm">
              <PlaceholderLineQr label={t("Placeholder LINE QR code")} />
            </div>
            <h3 className="font-display mt-6 text-3xl text-[#112a46]">
              {t("Scan to connect")}
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-xs leading-relaxed text-[#657080]">
              {t(
                "This is a visual placeholder for the official Shwe Thailand LINE QR code.",
              )}
            </p>
            <p className="mt-4 rounded-xl bg-[#f4c95d]/25 px-4 py-3 text-[10px] font-bold leading-relaxed text-[#795a1e]">
              {t(
                "Not scannable yet — replace this placeholder with the official LINE QR image or add-friend link.",
              )}
            </p>
          </div>
        </ModalShell>
      )}
    </main>
  );
}
