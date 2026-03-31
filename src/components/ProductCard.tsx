import React, { useState, Fragment } from 'react';
import {
  HelpCircleIcon,
  ExternalLinkIcon,
  CheckIcon,
  ChevronDownIcon,
  Building2Icon,
  HeartPulseIcon,
  InfoIcon,
  XIcon } from
'lucide-react';
interface Section {
  title: string;
  description?: string;
  inclusions: string[];
  extraInclusions?: string[];
  factsheetLabel: string;
  factsheetUrl: string;
}
interface ProductCardProps {
  title: string;
  subtitle?: string;
  priceDollars: string;
  priceCents: string;
  hospitalExcess: string;
  sections: Section[];
  selected?: boolean;
  bestValueTag?: boolean;
  borderTopColor?: 'blue' | 'green';
  groupedSections?: boolean;
  variant?: 'default' | 'future';
  inclusionsLabel?: string;
  onSelect?: () => void;
  onContinue?: () => void;
}
function InclusionAccordion({ items }: {items: string[];}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 bg-transparent border-0 p-0 cursor-pointer text-brand-dark-green font-medium text-base leading-6 underline decoration-solid decoration-brand-dark-green underline-offset-2 decoration-2">
        
        <span>{open ? 'Hide inclusions' : 'Show all inclusions'}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        
      </button>
      {open &&
      <ul className="flex flex-col gap-3 m-0 mt-3 p-0 list-none">
          {items.map((item, i) =>
        <li key={i} className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-brand-dark-green shrink-0" />
              <span className="text-brand-body text-base leading-6">
                {item}
              </span>
            </li>
        )}
        </ul>
      }
    </div>);

}
function CollapsibleSectionGroup({
  section,
  icon,
  bgClass,
  defaultOpen = false





}: {section: Section;icon: React.ReactNode;bgClass: string;defaultOpen?: boolean;}) {
  const [open, setOpen] = useState(defaultOpen);
  const allInclusions = [
  ...section.inclusions,
  ...(section.extraInclusions || [])];

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-3 px-4 py-3 ${bgClass} border-0 cursor-pointer transition-colors duration-150`}>
        
        <span className="text-brand-dark-green">{icon}</span>
        <span className="text-brand-body text-[16px] font-bold tracking-[-0.32px] leading-6 flex-1 text-left">
          {section.title}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-brand-body shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        
      </button>
      {open &&
      <div className="flex flex-col gap-3 px-4 pt-3 pb-1">
          {section.description &&
        <p className="text-brand-container text-sm leading-5 text-left max-w-[512px] m-0">
              {section.description}
            </p>
        }
          {allInclusions.length > 0 &&
        <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              {allInclusions.map((item, i) =>
          <li key={i} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-brand-dark-green shrink-0" />
                  <span className="text-brand-body text-base leading-6">
                    {item}
                  </span>
                </li>
          )}
            </ul>
        }
          {section.factsheetUrl &&
        <a
          href={section.factsheetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark-green font-medium text-base leading-6 underline decoration-solid decoration-brand-dark-green underline-offset-2 decoration-2 cursor-pointer mt-1 mb-1">
          
              <span>{section.factsheetLabel}</span>
              <span className="sr-only">, opens in a new tab</span>
              <span className="align-middle leading-4 ml-2 inline-block">
                <ExternalLinkIcon className="w-4 h-4 inline-block" />
              </span>
            </a>
        }
        </div>
      }
    </div>);

}
export function ProductCard({
  title,
  subtitle,
  priceDollars,
  priceCents,
  hospitalExcess,
  sections,
  selected = false,
  bestValueTag = false,
  borderTopColor = 'green',
  groupedSections = false,
  variant = 'default',
  inclusionsLabel = 'Key inclusions',
  onSelect,
  onContinue
}: ProductCardProps) {
  const [showFutureDetails, setShowFutureDetails] = useState(false);
  if (variant === 'future') {
    const allInclusions = sections.flatMap((s) => s.inclusions);
    return (
      <div
        role="group"
        aria-roledescription="slide"
        className="relative box-border min-w-0 w-[372px]"
        style={{
          gridRow: 'span 6',
          display: 'grid',
          gridTemplateRows: 'subgrid'
        }}>
        
        <div
          className="grid shadow-card bg-white pt-6 pb-0 border-t-8 border-t-brand-dark-green rounded-lg overflow-hidden"
          style={{
            gridRow: 'span 6',
            display: 'grid',
            gridTemplateRows: 'subgrid',
            gap: 0
          }}>
          
          {/* Header */}
          <div className="px-6 box-border pb-6">
            <h2 className="text-brand-dark-green text-[24px] font-semibold tracking-[-0.48px] leading-6 text-balance m-0">
              {title}
            </h2>
            {subtitle &&
            <p className="text-brand-container text-sm leading-5 text-left max-w-[512px] mt-3 m-0">
                {subtitle}
              </p>
            }
          </div>

          {/* Price */}
          <div className="px-6 box-border pb-6">
            <p className="text-brand-container text-[15px] m-0 mb-1">from</p>
            <div>
              <span className="leading-[48px] text-[48px] font-semibold">
                {priceDollars}
              </span>
              <span className="text-[20px] font-bold">{priceCents}</span>
              <span className="text-[18px] ml-1">/ weekly</span>
            </div>
          </div>

          {/* Excess */}
          <div className="px-6 box-border flex items-center gap-3 pb-6">
            <div className="flex items-center gap-1.5">
              <span className="text-brand-container text-[16px]">Excess</span>
              <InfoIcon className="w-5 h-5 text-brand-container" />
            </div>
            <select className="appearance-none bg-[#F3F2F0] hover:bg-[#EAE8E4] transition-colors pl-4 pr-8 py-2 rounded-full text-brand-dark-green font-medium text-[16px] border-0 cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.75rem_center]">
              <option value="500">$500</option>
              <option value="750">$750</option>
            </select>
          </div>

          {/* CTA */}
          <div className="px-6 box-border pb-6">
            <button
              type="button"
              onClick={onSelect}
              className="w-full bg-brand-bright-green text-brand-dark-green font-bold text-[18px] tracking-[-0.32px] py-4 px-8 rounded-full border-0 transition-colors duration-[250ms] ease-in-out text-center cursor-pointer m-0">
              
              Select
            </button>
          </div>

          {/* Inclusions */}
          <div className="px-6 box-border pb-6">
            <h3 className="text-brand-dark-green text-[18px] font-bold tracking-[-0.36px] m-0 mb-4">
              {inclusionsLabel}
            </h3>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              {allInclusions.slice(0, 3).map((item, i) =>
              <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-brand-dark-green shrink-0 mt-0.5" />
                  <span className="text-brand-dark-green text-[16px] leading-6">
                    {item}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Show Details Accordion */}
          <div className="px-6 box-border mt-2 pb-6">
            <button
              type="button"
              onClick={() => setShowFutureDetails(!showFutureDetails)}
              className="w-full flex items-center justify-center gap-2 bg-[#F3F2F0] hover:bg-[#EAE8E4] transition-colors py-4 rounded-full text-brand-dark-green font-medium text-[16px] border-0 cursor-pointer">
              
              {showFutureDetails ? "Hide what's covered" : "See what's covered"}
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200 ${showFutureDetails ? 'rotate-180' : ''}`} />
              
            </button>

            {showFutureDetails &&
            <div className="mt-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                {sections.map((sec, idx) =>
              <div key={idx} className="flex flex-col gap-2">
                    <h4 className="font-bold text-brand-dark-green m-0">
                      {sec.title}
                    </h4>
                    {sec.extraInclusions && sec.extraInclusions.length > 0 &&
                <ul className="flex flex-col gap-0 m-0 mt-2 p-0 list-none divide-y divide-gray-100">
                        {sec.extraInclusions.map((item, i) => {
                    const excluded = item.startsWith('!');
                    const restricted = item.startsWith('~');
                    const label =
                    excluded || restricted ? item.slice(1) : item;
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-3 py-2.5">
                        
                              {excluded ?
                        <XIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /> :
                        restricted ?
                        <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-[11px] font-bold leading-none">
                                  R
                                </span> :

                        <CheckIcon className="w-5 h-5 text-brand-dark-green shrink-0 mt-0.5" />
                        }
                              <span className="text-[16px] leading-6 text-brand-dark-green">
                                {label}
                              </span>
                            </li>);

                  })}
                      </ul>
                }
                  </div>
              )}
              </div>
            }
          </div>

          {/* View product summary */}

          {/* Compare */}
          {/* Removed entirely */}
        </div>
      </div>);

  }
  const topBorderClass =
  borderTopColor === 'blue' ?
  'border-t-brand-dark-blue' :
  'border-t-brand-dark-green';
  const cardBgClass = selected ? 'bg-brand-light-green' : 'bg-white';
  const selectedBorderClass = selected ?
  'border-l-4 border-r-4 border-b-4 border-brand-dark-green' :
  '';
  const dividerClass = selected ?
  'border-brand-divider-selected' :
  'border-brand-divider';
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="relative box-border min-w-0 w-[372px]">
      
      {bestValueTag &&
      <div className="mb-3 relative bg-brand-dark-green text-brand-bright-green rounded p-2">
          <p className="text-brand-bright-green max-w-[512px] text-center m-0">
            Best Value
          </p>
        </div>
      }
    </div>);

}