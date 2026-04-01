import React, { useState } from "react";
import "./index.css";
import { ProductCard } from "./components/ProductCard";
import { ProductFilter } from "./components/ProductFilter";
export function App() {
  const [showAll, setShowAll] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const filteredCount = 3;
  const totalCount = 6;

  return (
    <div className="w-full min-h-screen bg-brand-page text-brand-container text-base leading-6 font-buenos-aires p-8 overflow-x-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        <ProductFilter
          showAll={showAll}
          onToggle={() => setShowAll(!showAll)}
          filteredCount={filteredCount}
          totalCount={totalCount}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${showAll ? 6 : 3}, 372px)`,
            gridTemplateRows: "repeat(6, auto)",
            columnGap: "42px",
            rowGap: "0px",
            alignContent: "start",
          }}
        >
          {/* Card 1 — Basic Care Hospital Plus */}
          <ProductCard
            title="Basic Care Hospital Plus"
            variant="future"
            showDetails={showDetails}
            onToggleDetails={() => setShowDetails(!showDetails)}
            subtitle="Entry-level cover for accidents and everyday procedures. A good starting point if you want hospital cover without paying for things you're unlikely to need yet."
            priceDollars="$20"
            priceCents=".62"
            hospitalExcess="$500"
            inclusionsLabel="What's covered"
            sections={[
              {
                title: "Hospital",
                inclusions: [
                  "Emergency Ambulance Cover",
                  "Dental surgery",
                  "Joint reconstructions",
                ],

                extraInclusions: [
                  "Rehabilitation",
                  "Hospital psychiatric services",
                  "Podiatric surgery",
                  "Pain management",
                  "Skin procedures",
                  "Miscarriage and termination of pregnancy",
                  "Diabetes management",
                  "Dialysis for chronic kidney failure",
                  "Gastrointestinal endoscopy",
                  "Hernia and appendix",
                ],
                factsheetLabel: "See all in Hospital factsheet",
                factsheetUrl: "#",
              },
            ]}
          />

          {/* Card 2 — Bronze Protect Hospital Plus */}
          <ProductCard
            title="Bronze Protect Hospital Plus"
            variant="future"
            showDetails={showDetails}
            onToggleDetails={() => setShowDetails(!showDetails)}
            subtitle="Broader cover for a wider range of health needs. Good if you want confidence you're covered for more serious conditions and treatments."
            priceDollars="$22"
            priceCents=".97"
            hospitalExcess="$500"
            inclusionsLabel="Includes everything in Basic, plus:"
            sections={[
              {
                title: "Hospital",
                inclusions: [
                  "Blood",
                  "Bone, joint and muscle",
                  "Brain and nervous system",
                ],

                extraInclusions: [
                  "Lung and chest",
                  "Gastrointestinal",
                  "Kidney and bladder",
                  "Male reproductive system",
                  "Diabetes management",
                  "Heart and vascular system",
                  "Tonsils, adenoids and grommets",
                  "Skin procedures",
                  "Hernia and appendix",
                  "Pain management with device",
                ],
                factsheetLabel: "See all in Hospital factsheet",
                factsheetUrl: "#",
              },
            ]}
          />

          {/* Card 3 — Silver Secure Hospital Plus */}
          <ProductCard
            title="Silver Secure Hospital Plus"
            variant="future"
            showDetails={showDetails}
            onToggleDetails={() => setShowDetails(!showDetails)}
            subtitle="Comprehensive cover for most hospital treatments. Right for you if you want to feel covered for the big things without stepping up to Gold."
            priceDollars="$28"
            priceCents=".90"
            hospitalExcess="$500"
            inclusionsLabel="Includes everything in Bronze, plus:"
            sections={[
              {
                title: "Hospital",
                inclusions: [
                  "Ear, nose and throat",
                  "Eye (not cataracts)",
                  "Chemotherapy, radiotherapy and immunotherapy for cancer",
                ],

                extraInclusions: [
                  "Joint replacements",
                  "Cataracts and eye lens",
                  "Back, neck and spine",
                  "Plastic and reconstructive surgery",
                  "Gynaecology",
                  "Insulin pumps",
                  "Pain management with device",
                  "Sleep studies",
                  "Implantation of hearing devices",
                  "Weight loss surgery",
                ],
                factsheetLabel: "See all in Hospital factsheet",
                factsheetUrl: "#",
              },
            ]}
          />

          {showAll && (
            <>
              {/* Card 4 — Gold Complete Hospital */}
              <ProductCard
                title="Gold Complete Hospital"
                variant="future"
                showDetails={showDetails}
                onToggleDetails={() => setShowDetails(!showDetails)}
                subtitle="Top-level hospital cover for everything including pregnancy, assisted reproduction and weight loss surgery."
                priceDollars="$35"
                priceCents=".40"
                hospitalExcess="$500"
                inclusionsLabel="Includes everything in Silver, plus:"
                sections={[
                  {
                    title: "Hospital",
                    inclusions: [
                      "Pregnancy and birth",
                      "Assisted reproduction",
                      "Weight loss surgery",
                    ],
                    extraInclusions: [
                      "Joint replacements",
                      "Cataracts and eye lens",
                      "Back, neck and spine",
                      "Plastic and reconstructive surgery",
                      "Heart and vascular system",
                      "Gynaecology",
                      "Implantation of hearing devices",
                      "Sleep studies",
                      "Insulin pumps",
                      "Pain management with device",
                    ],
                    factsheetLabel: "See all in Hospital factsheet",
                    factsheetUrl: "#",
                  },
                ]}
              />

              {/* Card 5 — Gold Ultimate Hospital */}
              <ProductCard
                title="Gold Ultimate Hospital"
                variant="future"
                showDetails={showDetails}
                onToggleDetails={() => setShowDetails(!showDetails)}
                subtitle="Our most comprehensive hospital cover with the highest benefit limits and no excluded services."
                priceDollars="$42"
                priceCents=".15"
                hospitalExcess="$500"
                inclusionsLabel="Includes everything in Gold, plus:"
                sections={[
                  {
                    title: "Hospital",
                    inclusions: [
                      "Psychiatric services",
                      "Rehabilitation",
                      "Palliative care",
                    ],
                    extraInclusions: [
                      "Pregnancy and birth",
                      "Assisted reproduction",
                      "Joint replacements",
                      "Cataracts and eye lens",
                      "Back, neck and spine",
                      "Weight loss surgery",
                      "Plastic and reconstructive surgery",
                      "Gynaecology",
                      "Implantation of hearing devices",
                      "Insulin pumps",
                    ],
                    factsheetLabel: "See all in Hospital factsheet",
                    factsheetUrl: "#",
                  },
                ]}
              />

              {/* Card 6 — Top Cover Hospital */}
              <ProductCard
                title="Top Cover Hospital"
                variant="future"
                showDetails={showDetails}
                onToggleDetails={() => setShowDetails(!showDetails)}
                subtitle="Premium hospital cover with the highest limits, no exclusions and access to all agreement hospitals."
                priceDollars="$48"
                priceCents=".70"
                hospitalExcess="$500"
                inclusionsLabel="Includes everything in Ultimate, plus:"
                sections={[
                  {
                    title: "Hospital",
                    inclusions: [
                      "Heart and vascular system",
                      "Back, neck and spine",
                      "Cataracts and eye lens procedures",
                    ],
                    extraInclusions: [
                      "Pregnancy and birth",
                      "Assisted reproduction",
                      "Weight loss surgery",
                      "Psychiatric services",
                      "Rehabilitation",
                      "Palliative care",
                      "Sleep studies",
                      "Plastic and reconstructive surgery",
                      "Gynaecology",
                      "Implantation of hearing devices",
                    ],
                    factsheetLabel: "See all in Hospital factsheet",
                    factsheetUrl: "#",
                  },
                ]}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
