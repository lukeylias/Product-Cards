import React from "react";

interface ProductFilterProps {
  showAll: boolean;
  onToggle: () => void;
  filteredCount: number;
  totalCount: number;
}

export function ProductFilter({
  showAll,
  onToggle,
  filteredCount,
  totalCount,
}: ProductFilterProps) {
  const visibleCount = showAll ? totalCount : filteredCount;

  return (
    <div className="flex items-center justify-between bg-white rounded-lg px-6 py-4 shadow-card">
      <p className="text-brand-container text-[16px] m-0">
        Showing{" "}
        <span className="font-bold text-brand-dark-green">{visibleCount}</span>{" "}
        of {totalCount} products
      </p>
      <label className="flex items-center gap-3 cursor-pointer">
        <span className="text-brand-container text-[16px]">
          Show all products
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={showAll}
          onClick={onToggle}
          className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border-0 cursor-pointer transition-colors duration-200 ${showAll ? "bg-brand-dark-green" : "bg-brand-divider"}`}
        >
          <span
            className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${showAll ? "translate-x-6" : "translate-x-1"}`}
          />
        </button>
      </label>
    </div>
  );
}
