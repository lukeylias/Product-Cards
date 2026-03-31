import React from 'react';
import './index.css';
import { ProductCard } from './components/ProductCard';
export function App() {
  return (
    <div className="grid grid-cols-[repeat(3,372px)] gap-x-4 w-full min-h-screen bg-brand-page text-brand-container text-base leading-6 font-buenos-aires p-8 overflow-x-auto items-start">
      {/* Card 1 — Basic Care Hospital Plus */}
      <ProductCard
        title="Basic Care Hospital Plus"
        variant="future"
        subtitle="Entry-level cover for accidents and everyday procedures. A good starting point if you want hospital cover without paying for things you're unlikely to need yet."
        priceDollars="$20"
        priceCents=".62"
        hospitalExcess="$500"
        inclusionsLabel="What's covered"
        sections={[
        {
          title: 'Hospital',
          inclusions: [
          'Emergency Ambulance Cover',
          'Dental surgery',
          'Joint reconstructions'],

          extraInclusions: [],
          factsheetLabel: 'See all in Hospital factsheet',
          factsheetUrl: '#'
        }]
        } />
      

      {/* Card 2 — Bronze Protect Hospital Plus */}
      <ProductCard
        title="Bronze Protect Hospital Plus"
        variant="future"
        subtitle="Broader cover for a wider range of health needs. Good if you want confidence you're covered for more serious conditions and treatments."
        priceDollars="$22"
        priceCents=".97"
        hospitalExcess="$500"
        inclusionsLabel="Includes everything in Basic, plus:"
        sections={[
        {
          title: 'Hospital',
          inclusions: [
          'Blood',
          'Bone, joint and muscle',
          'Brain and nervous system'],

          extraInclusions: [],
          factsheetLabel: 'See all in Hospital factsheet',
          factsheetUrl: '#'
        }]
        } />
      

      {/* Card 3 — Silver Secure Hospital Plus */}
      <ProductCard
        title="Silver Secure Hospital Plus"
        variant="future"
        subtitle="Comprehensive cover for most hospital treatments. Right for you if you want to feel covered for the big things without stepping up to Gold."
        priceDollars="$28"
        priceCents=".90"
        hospitalExcess="$500"
        inclusionsLabel="Includes everything in Bronze, plus:"
        sections={[
        {
          title: 'Hospital',
          inclusions: [
          'Ear, nose and throat',
          'Eye (not cataracts)',
          'Chemotherapy, radiotherapy and immunotherapy for cancer'],

          extraInclusions: [],
          factsheetLabel: 'See all in Hospital factsheet',
          factsheetUrl: '#'
        }]
        } />
      
    </div>);

}