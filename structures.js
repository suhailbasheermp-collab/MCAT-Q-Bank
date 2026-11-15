// Helper to build standard L-amino acid backbone (pH 7.4) + custom R-group SVG elements
function aaSvg(rGroupSvg, viewH = 175) {
  return `<svg viewBox="0 0 240 ${viewH}" width="100%" style="max-height:210px;display:block;margin:auto">
    <g stroke="#1f3a5f" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="62" y1="45" x2="115" y2="45"/>
      <line x1="115" y1="45" x2="165" y2="45"/>
      <line x1="163" y1="45" x2="163" y2="18"/>
      <line x1="169" y1="45" x2="169" y2="18"/>
      <line x1="165" y1="45" x2="195" y2="62"/>
      <line x1="115" y1="45" x2="115" y2="82"/>
    </g>
    <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1a1a1a" text-anchor="middle">
      <text x="36" y="50">H₃N⁺</text>
      <text x="115" y="37" font-size="12" fill="#555">H</text>
      <text x="166" y="14" fill="#c0392b">O</text>
      <text x="208" y="68" fill="#c0392b">O⁻</text>
    </g>
    ${rGroupSvg}
  </svg>`;
}

const STRUCTURES = [
  // ================= ALL 20 AMINO ACIDS =================
  {id:1,cat:"Amino Acids",name:"Glycine (Gly / G)",info:"Nonpolar aliphatic • Only achiral amino acid (R = -H) • Flexible, disrupts alpha-helices.",
   svg:aaSvg(`<text x="115" y="98" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#1f3a5f" text-anchor="middle">H</text>`,120)},

  {id:2,cat:"Amino Acids",name:"Alanine (Ala / A)",info:"Nonpolar aliphatic • R = methyl (-CH₃) • Standard chiral L-amino acid (S configuration).",
   svg:aaSvg(`<text x="115" y="98" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#1f3a5f" text-anchor="middle">CH₃</text>`,120)},

  {id:3,cat:"Amino Acids",name:"Valine (Val / V)",info:"Nonpolar branched-chain • R = isopropyl group (-CH(CH₃)₂) • Beta-branched.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="115" y1="82" x2="88" y2="105"/><line x1="115" y1="82" x2="142" y2="105"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f3a5f" text-anchor="middle">
       <text x="115" y="79" font-size="12">CH</text><text x="76" y="118">CH₃</text><text x="154" y="118">CH₃</text>
     </g>`,135)},

  {id:4,cat:"Amino Acids",name:"Leucine (Leu / L)",info:"Nonpolar branched-chain • R = isobutyl (-CH₂-CH(CH₃)₂) • Exclusively ketogenic.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="115" y1="82" x2="115" y2="110"/><line x1="115" y1="110" x2="88" y2="132"/><line x1="115" y1="110" x2="142" y2="132"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f3a5f" text-anchor="middle">
       <text x="76" y="145">CH₃</text><text x="154" y="145">CH₃</text>
     </g>`,160)},

  {id:5,cat:"Amino Acids",name:"Isoleucine (Ile / I)",info:"Nonpolar branched-chain • R = sec-butyl (-CH(CH₃)-CH₂-CH₃) • Has 2 chiral centers.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="115" y1="82" x2="85" y2="98"/><line x1="115" y1="82" x2="135" y2="108"/><line x1="135" y1="108" x2="115" y2="134"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f3a5f" text-anchor="middle">
       <text x="70" y="106">CH₃</text><text x="105" y="148">CH₃</text>
     </g>`,160)},

  {id:6,cat:"Amino Acids",name:"Methionine (Met / M)",info:"Nonpolar sulfur-containing • R = -CH₂-CH₂-S-CH₃ (thioether) • Start codon (AUG); precursor to SAM.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="115" y1="82" x2="138" y2="100"/><line x1="138" y1="100" x2="122" y2="120"/><line x1="108" y1="134" x2="88" y2="148"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="115" y="133" fill="#d98e04">S</text><text x="74" y="158" fill="#1f3a5f">CH₃</text>
     </g>`,170)},

  {id:7,cat:"Amino Acids",name:"Proline (Pro / P)",info:"Nonpolar cyclic • Secondary alpha-amino group in a 5-membered pyrrolidine ring • Classic alpha-helix breaker.",
   svg:`<svg viewBox="0 0 240 135" width="100%" style="max-height:190px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <polygon points="75,55 115,45 130,85 95,112 65,88"/>
       <line x1="115" y1="45" x2="165" y2="45"/>
       <line x1="163" y1="45" x2="163" y2="18"/>
       <line x1="169" y1="45" x2="169" y2="18"/>
       <line x1="165" y1="45" x2="195" y2="62"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="58" y="54" fill="#1a1a1a">H₂N⁺</text>
       <text x="166" y="14" fill="#c0392b">O</text>
       <text x="208" y="68" fill="#c0392b">O⁻</text>
     </g>
   </svg>`},

  {id:8,cat:"Amino Acids",name:"Phenylalanine (Phe / F)",info:"Aromatic nonpolar • R = benzyl (-CH₂-phenyl) • Absorbs UV light (~260 nm); converted to Tyr by phenylalanine hydroxylase.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="115,82 143,98 143,130 115,146 87,130 87,98"/>
       <circle cx="115" cy="114" r="17"/>
     </g>`,160)},

  {id:9,cat:"Amino Acids",name:"Tyrosine (Tyr / Y)",info:"Aromatic polar • R = -CH₂-phenol (-OH on para position, pKa ~10.5) • Phosphorylation target; precursor to catecholamines & thyroid hormones.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="115,82 143,98 143,130 115,146 87,130 87,98"/>
       <circle cx="115" cy="114" r="17"/>
       <line x1="115" y1="146" x2="115" y2="165"/>
     </g>
     <text x="115" y="180" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#c0392b" text-anchor="middle">OH</text>`,190)},

  {id:10,cat:"Amino Acids",name:"Tryptophan (Trp / W)",info:"Aromatic nonpolar • R = indole bicyclic ring • Strongest UV absorbance at 280 nm; precursor to serotonin and niacin.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="115,82 142,98 134,128 102,128 94,98"/>
       <polygon points="142,98 168,86 192,102 192,130 166,144 134,128"/>
       <circle cx="164" cy="115" r="14"/>
     </g>
     <text x="100" y="142" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#1f3a5f" text-anchor="middle">NH</text>`,160)},

  {id:11,cat:"Amino Acids",name:"Serine (Ser / S)",info:"Polar uncharged • R = hydroxymethyl (-CH₂OH) • Common phosphorylation site and catalytic triad nucleophile.",
   svg:aaSvg(`<text x="115" y="98" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#c0392b" text-anchor="middle">OH</text>`,120)},

  {id:12,cat:"Amino Acids",name:"Threonine (Thr / T)",info:"Polar uncharged • R = -CH(OH)CH₃ • Has 2 chiral centers; phosphorylation & O-glycosylation site.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="115" y1="82" x2="88" y2="104"/><line x1="115" y1="82" x2="142" y2="104"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="76" y="118" fill="#c0392b">OH</text><text x="154" y="118" fill="#1f3a5f">CH₃</text>
     </g>`,135)},

  {id:13,cat:"Amino Acids",name:"Cysteine (Cys / C)",info:"Polar sulfur-containing • R = thiol (-CH₂SH, pKa ~8.3) • Only L-amino acid with (R) configuration; oxidizes to form disulfide (-S-S-) bonds.",
   svg:aaSvg(`<text x="115" y="98" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="#d98e04" text-anchor="middle">SH</text>`,120)},

  {id:14,cat:"Amino Acids",name:"Asparagine (Asn / N)",info:"Polar uncharged amide • R = -CH₂-CONH₂ • N-linked glycosylation attachment site.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="113" y1="82" x2="113" y2="106"/><line x1="118" y1="82" x2="118" y2="106"/><line x1="115" y1="82" x2="145" y2="96"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="115" y="120" fill="#c0392b">O</text><text x="162" y="102" fill="#1f3a5f">NH₂</text>
     </g>`,135)},

  {id:15,cat:"Amino Acids",name:"Glutamine (Gln / Q)",info:"Polar uncharged amide • R = -CH₂-CH₂-CONH₂ • Major nontoxic nitrogen carrier in blood.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="115" y1="82" x2="138" y2="102"/><line x1="136" y1="102" x2="136" y2="126"/><line x1="141" y1="102" x2="141" y2="126"/><line x1="138" y1="102" x2="168" y2="92"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="138" y="140" fill="#c0392b">O</text><text x="184" y="96" fill="#1f3a5f">NH₂</text>
     </g>`,150)},

  {id:16,cat:"Amino Acids",name:"Aspartate / Aspartic Acid (Asp / D)",info:"Acidic negatively charged at pH 7.4 • R = -CH₂-COO⁻ (pKa ~3.9) • Net charge -1 at physiological pH.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="113" y1="82" x2="113" y2="106"/><line x1="118" y1="82" x2="118" y2="106"/><line x1="115" y1="82" x2="145" y2="96"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#c0392b" text-anchor="middle">
       <text x="115" y="120">O</text><text x="158" y="102">O⁻</text>
     </g>`,135)},

  {id:17,cat:"Amino Acids",name:"Glutamate / Glutamic Acid (Glu / E)",info:"Acidic negatively charged at pH 7.4 • R = -CH₂-CH₂-COO⁻ (pKa ~4.2) • Major excitatory neurotransmitter; mutated to Val in HbS.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2"><line x1="115" y1="82" x2="138" y2="102"/><line x1="136" y1="102" x2="136" y2="126"/><line x1="141" y1="102" x2="141" y2="126"/><line x1="138" y1="102" x2="168" y2="92"/></g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#c0392b" text-anchor="middle">
       <text x="138" y="140">O</text><text x="180" y="96">O⁻</text>
     </g>`,150)},

  {id:18,cat:"Amino Acids",name:"Lysine (Lys / K)",info:"Basic positively charged at pH 7.4 • R = -(CH₂)₄-NH₃⁺ (pKa ~10.5) • Net charge +1; target of histone acetylation & ubiquitination.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2" fill="none"><polyline points="115,82 135,98 115,114 135,130 115,146"/></g>
     <text x="115" y="162" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#2e9e4f" text-anchor="middle">NH₃⁺</text>`,175)},

  {id:19,cat:"Amino Acids",name:"Arginine (Arg / R)",info:"Basic positively charged at pH 7.4 • R = -(CH₂)₃-guanidinium group (pKa ~12.5) • Most basic amino acid; precursor to nitric oxide (NO).",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polyline points="115,82 135,96 115,110"/>
       <line x1="115" y1="126" x2="115" y2="142"/>
       <line x1="115" y1="142" x2="88" y2="156"/>
       <line x1="113" y1="142" x2="138" y2="156"/>
       <line x1="117" y1="138" x2="142" y2="152"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="115" y="123" fill="#1f3a5f">NH</text>
       <text x="76" y="168" fill="#1f3a5f">H₂N</text>
       <text x="155" y="168" fill="#2e9e4f">NH₂⁺</text>
     </g>`,180)},

  {id:20,cat:"Amino Acids",name:"Histidine (His / H)",info:"Basic aromatic • R = imidazole ring (pKa ~6.0) • Uncharged (~90%) at pH 7.4; acts as proton shuttle in enzyme active sites.",
   svg:aaSvg(`<g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="115,82 142,100 132,130 98,130 88,100"/>
       <line x1="135" y1="103" x2="127" y2="125"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#2e9e4f" text-anchor="middle">
       <text x="86" y="102">NH</text><text x="148" y="102">N</text>
     </g>`,145)},

  // ================= NITROGENOUS BASES & NUCLEOSIDES =================
  {id:21,cat:"Bases & Nucleotides",name:"Adenine (Purine)",info:"Purine (2 fused rings: pyrimidine + imidazole) • Has exocyclic -NH₂ at C6 • Pairs with Thymine/Uracil via 2 H-bonds.",
   svg:`<svg viewBox="0 0 240 165" width="100%" style="max-height:195px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="90,55 120,38 150,55 150,90 120,107 90,90"/>
       <polygon points="150,55 182,45 200,72 182,100 150,90"/>
       <line x1="120" y1="38" x2="120" y2="18"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="120" y="14" fill="#2e9e4f">NH₂</text>
       <text x="86" y="57" fill="#1f3a5f">N</text><text x="86" y="94" fill="#1f3a5f">N</text>
       <text x="184" y="42" fill="#1f3a5f">N</text><text x="184" y="112" fill="#1f3a5f">NH</text>
     </g>
   </svg>`},

  {id:22,cat:"Bases & Nucleotides",name:"Guanine (Purine)",info:"Purine (2 fused rings) • Has carbonyl (=O) at C6 and -NH₂ at C2 • Pairs with Cytosine via 3 H-bonds.",
   svg:`<svg viewBox="0 0 240 165" width="100%" style="max-height:195px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="90,55 120,38 150,55 150,90 120,107 90,90"/>
       <polygon points="150,55 182,45 200,72 182,100 150,90"/>
       <line x1="118" y1="38" x2="118" y2="18"/><line x1="122" y1="38" x2="122" y2="18"/>
       <line x1="90" y1="90" x2="68" y2="102"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="120" y="14" fill="#c0392b">O</text>
       <text x="54" y="110" fill="#2e9e4f">H₂N</text>
       <text x="84" y="57" fill="#1f3a5f">HN</text><text x="120" y="120" fill="#1f3a5f">N</text>
       <text x="184" y="42" fill="#1f3a5f">N</text><text x="184" y="112" fill="#1f3a5f">NH</text>
     </g>
   </svg>`},

  {id:23,cat:"Bases & Nucleotides",name:"Cytosine (Pyrimidine)",info:"Pyrimidine (single 6-membered ring) • Has -NH₂ at C4 and =O at C2 • Deaminates spontaneously into Uracil.",
   svg:`<svg viewBox="0 0 220 160" width="100%" style="max-height:190px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="110,42 142,60 142,96 110,114 78,96 78,60"/>
       <line x1="110" y1="42" x2="110" y2="20"/>
       <line x1="108" y1="114" x2="108" y2="134"/><line x1="112" y1="114" x2="112" y2="134"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="110" y="16" fill="#2e9e4f">NH₂</text>
       <text x="110" y="148" fill="#c0392b">O</text>
       <text x="148" y="62" fill="#1f3a5f">N</text><text x="72" y="100" fill="#1f3a5f">NH</text>
     </g>
   </svg>`},

  {id:24,cat:"Bases & Nucleotides",name:"Thymine (Pyrimidine)",info:"Pyrimidine found in DNA • Has TWO carbonyls (=O) AND a methyl (-CH₃) group at C5 (5-methyluracil).",
   svg:`<svg viewBox="0 0 220 160" width="100%" style="max-height:190px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="110,42 142,60 142,96 110,114 78,96 78,60"/>
       <line x1="108" y1="42" x2="108" y2="20"/><line x1="112" y1="42" x2="112" y2="20"/>
       <line x1="108" y1="114" x2="108" y2="134"/><line x1="112" y1="114" x2="112" y2="134"/>
       <line x1="78" y1="60" x2="54" y2="48"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="110" y="16" fill="#c0392b">O</text>
       <text x="110" y="148" fill="#c0392b">O</text>
       <text x="38" y="48" fill="#2e9e4f">H₃C</text>
       <text x="148" y="62" fill="#1f3a5f">NH</text><text x="72" y="100" fill="#1f3a5f">NH</text>
     </g>
   </svg>`},

  {id:25,cat:"Bases & Nucleotides",name:"Uracil (Pyrimidine)",info:"Pyrimidine found in RNA • Has TWO carbonyls (=O) and NO methyl group (unlike Thymine).",
   svg:`<svg viewBox="0 0 220 160" width="100%" style="max-height:190px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="110,42 142,60 142,96 110,114 78,96 78,60"/>
       <line x1="108" y1="42" x2="108" y2="20"/><line x1="112" y1="42" x2="112" y2="20"/>
       <line x1="108" y1="114" x2="108" y2="134"/><line x1="112" y1="114" x2="112" y2="134"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="110" y="16" fill="#c0392b">O</text>
       <text x="110" y="148" fill="#c0392b">O</text>
       <text x="148" y="62" fill="#1f3a5f">NH</text><text x="72" y="100" fill="#1f3a5f">NH</text>
     </g>
   </svg>`},

  {id:26,cat:"Bases & Nucleotides",name:"Adenosine (Purine Nucleoside)",info:"Adenine base linked via beta-N9-glycosidic bond to D-ribose sugar (has 2'-OH and 3'-OH, no phosphate).",
   svg:`<svg viewBox="0 0 260 185" width="100%" style="max-height:210px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="115,42 142,26 168,42 168,72 142,88 115,72"/>
       <polygon points="168,42 196,33 212,57 196,81 168,72"/>
       <line x1="142" y1="26" x2="142" y2="10"/>
       <line x1="196" y1="81" x2="165" y2="115"/>
       <polygon points="125,100 165,115 152,152 102,152 90,115"/>
       <line x1="90" y1="115" x2="65" y2="95"/>
       <line x1="152" y1="152" x2="162" y2="170"/>
       <line x1="102" y1="152" x2="92" y2="170"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="142" y="8" fill="#2e9e4f">NH₂</text>
       <text x="125" y="96" fill="#c0392b">O</text>
       <text x="46" y="92" fill="#1f3a5f">HOCH₂</text>
       <text x="168" y="182" fill="#c0392b">OH (2')</text>
       <text x="86" y="182" fill="#c0392b">OH (3')</text>
     </g>
   </svg>`},

  // ================= CARBOHYDRATES =================
  {id:27,cat:"Carbohydrates",name:"Alpha-D-Glucose (Pyranose)",info:"Aldohexose • C1 -OH points DOWN (trans to C6 -CH₂OH) • Equatorial -OH pattern: Down, Up, Down (C2, C3, C4).",
   svg:`<svg viewBox="0 0 240 165" width="100%" style="max-height:195px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="85,55 145,55 175,85 145,115 85,115 55,85"/>
       <line x1="85" y1="55" x2="85" y2="28"/>
       <line x1="175" y1="85" x2="175" y2="115"/>
       <line x1="145" y1="115" x2="145" y2="142"/>
       <line x1="85" y1="115" x2="85" y2="88"/>
       <line x1="55" y1="85" x2="55" y2="115"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="145" y="60" fill="#c0392b" font-size="15">O</text>
       <text x="85" y="22" fill="#1f3a5f">CH₂OH</text>
       <text x="182" y="128" fill="#2e9e4f">OH (α, C1)</text>
       <text x="145" y="156" fill="#c0392b">OH</text>
       <text x="85" y="82" fill="#c0392b">OH</text>
       <text x="55" y="128" fill="#c0392b">OH</text>
     </g>
   </svg>`},

  {id:28,cat:"Carbohydrates",name:"Beta-D-Glucose (Pyranose)",info:"Aldohexose • C1 -OH points UP (cis to C6 -CH₂OH) • All bulky substituents are equatorial (most stable hexose).",
   svg:`<svg viewBox="0 0 240 165" width="100%" style="max-height:195px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="85,60 145,60 175,90 145,120 85,120 55,90"/>
       <line x1="85" y1="60" x2="85" y2="32"/>
       <line x1="175" y1="90" x2="175" y2="60"/>
       <line x1="145" y1="120" x2="145" y2="146"/>
       <line x1="85" y1="120" x2="85" y2="92"/>
       <line x1="55" y1="90" x2="55" y2="120"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="145" y="65" fill="#c0392b" font-size="15">O</text>
       <text x="85" y="26" fill="#1f3a5f">CH₂OH</text>
       <text x="182" y="54" fill="#2e9e4f">OH (β, C1)</text>
       <text x="145" y="160" fill="#c0392b">OH</text>
       <text x="85" y="86" fill="#c0392b">OH</text>
       <text x="55" y="134" fill="#c0392b">OH</text>
     </g>
   </svg>`},

  {id:29,cat:"Carbohydrates",name:"D-Galactose (C4 Epimer of Glucose)",info:"Aldohexose • Differs from D-glucose ONLY at C4 (C4 -OH points UP instead of down).",
   svg:`<svg viewBox="0 0 240 165" width="100%" style="max-height:195px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="85,60 145,60 175,90 145,120 85,120 55,90"/>
       <line x1="85" y1="60" x2="85" y2="32"/>
       <line x1="175" y1="90" x2="175" y2="120"/>
       <line x1="145" y1="120" x2="145" y2="146"/>
       <line x1="85" y1="120" x2="85" y2="92"/>
       <line x1="55" y1="90" x2="55" y2="60"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="145" y="65" fill="#c0392b" font-size="15">O</text>
       <text x="85" y="26" fill="#1f3a5f">CH₂OH</text>
       <text x="178" y="134" fill="#c0392b">OH</text>
       <text x="145" y="160" fill="#c0392b">OH</text>
       <text x="85" y="86" fill="#c0392b">OH</text>
       <text x="48" y="54" fill="#2e9e4f">OH (C4 ↑)</text>
     </g>
   </svg>`},

  {id:30,cat:"Carbohydrates",name:"D-Fructose (Ketohexose Furanose)",info:"Ketohexose • Forms a 5-membered furanose ring with TWO -CH₂OH groups (at C2 anomeric carbon and C5).",
   svg:`<svg viewBox="0 0 240 160" width="100%" style="max-height:190px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="120,42 175,78 154,128 86,128 65,78"/>
       <line x1="65" y1="78" x2="48" y2="48"/>
       <line x1="175" y1="78" x2="192" y2="48"/>
       <line x1="175" y1="78" x2="192" y2="108"/>
       <line x1="154" y1="128" x2="154" y2="150"/>
       <line x1="86" y1="128" x2="86" y2="102"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="120" y="48" fill="#c0392b" font-size="15">O</text>
       <text x="40" y="42" fill="#1f3a5f">HOH₂C</text>
       <text x="200" y="42" fill="#1f3a5f">CH₂OH</text>
       <text x="200" y="120" fill="#c0392b">OH</text>
       <text x="154" y="162" fill="#c0392b">OH</text>
       <text x="86" y="96" fill="#c0392b">OH</text>
     </g>
   </svg>`},

  {id:31,cat:"Carbohydrates",name:"2-Deoxy-D-Ribose (DNA Sugar)",info:"Aldopentose furanose • Lacks an -OH group at C2 (has H instead of OH at 2'), making DNA chemically more stable than RNA.",
   svg:`<svg viewBox="0 0 240 160" width="100%" style="max-height:190px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="120,42 175,78 154,128 86,128 65,78"/>
       <line x1="65" y1="78" x2="48" y2="48"/>
       <line x1="175" y1="78" x2="192" y2="48"/>
       <line x1="154" y1="128" x2="154" y2="150"/>
       <line x1="86" y1="128" x2="86" y2="150"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="120" y="48" fill="#c0392b" font-size="15">O</text>
       <text x="40" y="42" fill="#1f3a5f">HOH₂C</text>
       <text x="198" y="42" fill="#c0392b">OH</text>
       <text x="154" y="162" fill="#2e9e4f">H (no 2'-OH)</text>
       <text x="86" y="162" fill="#c0392b">OH (3')</text>
     </g>
   </svg>`},

  // ================= METABOLIC & ORGANIC HIGH-YIELDS =================
  {id:32,cat:"Metabolism & Organic",name:"Pyruvate (End-Product of Glycolysis)",info:"3-carbon alpha-keto acid (CH₃-CO-COO⁻) • Converted to Acetyl-CoA (aerobic), Lactate (anaerobic), or Oxaloacetate (gluconeogenesis).",
   svg:`<svg viewBox="0 0 240 130" width="100%" style="max-height:175px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="55" y1="80" x2="95" y2="55"/>
       <line x1="93" y1="55" x2="93" y2="25"/><line x1="98" y1="55" x2="98" y2="25"/>
       <line x1="95" y1="55" x2="145" y2="80"/>
       <line x1="143" y1="80" x2="143" y2="110"/><line x1="148" y1="80" x2="148" y2="110"/>
       <line x1="145" y1="80" x2="185" y2="58"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="38" y="86" fill="#1f3a5f">H₃C</text>
       <text x="95" y="20" fill="#c0392b">O</text>
       <text x="145" y="124" fill="#c0392b">O</text>
       <text x="198" y="62" fill="#c0392b">O⁻</text>
     </g>
   </svg>`},

  {id:33,cat:"Metabolism & Organic",name:"Lactate (Anaerobic Fermentation Product)",info:"3-carbon alpha-hydroxy acid (CH₃-CH(OH)-COO⁻) • Regenerates NAD⁺ from NADH via lactate dehydrogenase.",
   svg:`<svg viewBox="0 0 240 130" width="100%" style="max-height:175px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="55" y1="80" x2="95" y2="55"/>
       <line x1="95" y1="55" x2="95" y2="25"/>
       <line x1="95" y1="55" x2="145" y2="80"/>
       <line x1="143" y1="80" x2="143" y2="110"/><line x1="148" y1="80" x2="148" y2="110"/>
       <line x1="145" y1="80" x2="185" y2="58"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="38" y="86" fill="#1f3a5f">H₃C</text>
       <text x="95" y="20" fill="#2e9e4f">OH</text>
       <text x="145" y="124" fill="#c0392b">O</text>
       <text x="198" y="62" fill="#c0392b">O⁻</text>
     </g>
   </svg>`},

  {id:34,cat:"Metabolism & Organic",name:"Acetyl-CoA (High-Energy Thioester)",info:"2-carbon acetyl group linked to Coenzyme A via a high-energy thioester bond (-C(=O)-S-CoA) • Feeds into Citric Acid Cycle.",
   svg:`<svg viewBox="0 0 240 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="55" y1="75" x2="105" y2="50"/>
       <line x1="103" y1="50" x2="103" y2="20"/><line x1="108" y1="50" x2="108" y2="20"/>
       <line x1="105" y1="50" x2="155" y2="75"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="15" font-weight="700" text-anchor="middle">
       <text x="38" y="80" fill="#1f3a5f">H₃C</text>
       <text x="105" y="16" fill="#c0392b">O</text>
       <text x="182" y="80" fill="#d98e04">S—CoA</text>
     </g>
   </svg>`},

  {id:35,cat:"Metabolism & Organic",name:"Oxaloacetate (OAA)",info:"4-carbon keto-dicarboxylate (⁻OOC-CO-CH₂-COO⁻) • Condenses with Acetyl-CoA to form Citrate; gluconeogenesis intermediate.",
   svg:`<svg viewBox="0 0 260 135" width="100%" style="max-height:175px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="45" y1="60" x2="80" y2="80"/>
       <line x1="78" y1="80" x2="78" y2="108"/><line x1="83" y1="80" x2="83" y2="108"/>
       <line x1="80" y1="80" x2="120" y2="55"/>
       <line x1="118" y1="55" x2="118" y2="26"/><line x1="123" y1="55" x2="123" y2="26"/>
       <line x1="120" y1="55" x2="160" y2="80"/>
       <line x1="160" y1="80" x2="200" y2="55"/>
       <line x1="198" y1="55" x2="198" y2="26"/><line x1="203" y1="55" x2="203" y2="26"/>
       <line x1="200" y1="55" x2="232" y2="74"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#c0392b" text-anchor="middle">
       <text x="34" y="62">⁻O</text><text x="80" y="122">O</text>
       <text x="120" y="20">O</text>
       <text x="200" y="20">O</text><text x="244" y="80">O⁻</text>
     </g>
   </svg>`},

  {id:36,cat:"Metabolism & Organic",name:"Citrate (Tricarboxylic Acid)",info:"6-carbon tricarboxylate with a tertiary -OH group • First intermediate of Krebs cycle; allosterically inhibits PFK-1.",
   svg:`<svg viewBox="0 0 250 155" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="55" y1="75" x2="90" y2="95"/>
       <line x1="90" y1="95" x2="125" y2="75"/>
       <line x1="125" y1="75" x2="160" y2="95"/>
       <line x1="160" y1="95" x2="195" y2="75"/>
       <line x1="125" y1="75" x2="125" y2="42"/>
       <line x1="125" y1="75" x2="125" y2="110"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="36" y="76" fill="#c0392b">⁻OOC</text>
       <text x="215" y="76" fill="#c0392b">COO⁻</text>
       <text x="125" y="34" fill="#c0392b">COO⁻</text>
       <text x="125" y="126" fill="#2e9e4f">OH</text>
     </g>
   </svg>`},

  {id:37,cat:"Metabolism & Organic",name:"Isoprene Unit (2-Methyl-1,3-butadiene)",info:"5-carbon building block (C₅H₈) of all terpenes, cholesterol, steroid hormones, and fat-soluble vitamins (A, D, E, K).",
   svg:`<svg viewBox="0 0 220 135" width="100%" style="max-height:175px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.4" fill="none">
       <line x1="50" y1="90" x2="90" y2="62"/><line x1="54" y1="95" x2="94" y2="67"/>
       <line x1="92" y1="64" x2="135" y2="90"/>
       <line x1="133" y1="90" x2="173" y2="62"/><line x1="137" y1="95" x2="177" y2="67"/>
       <line x1="92" y1="64" x2="92" y2="26"/>
     </g>
     <text x="92" y="20" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#2e9e4f" text-anchor="middle">CH₃</text>
   </svg>`},

  {id:38,cat:"Metabolism & Organic",name:"Steroid Core / Cholesterol Backbone",info:"Four fused hydrocarbon rings (three 6-membered cyclohexane rings + one 5-membered cyclopentane ring: 6-6-6-5) • Precursor to all steroid hormones.",
   svg:`<svg viewBox="0 0 260 155" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.3" fill="none" stroke-linejoin="round">
       <polygon points="45,95 72,80 99,95 99,125 72,140 45,125"/>
       <polygon points="99,95 126,80 153,95 153,125 126,140 99,125"/>
       <polygon points="126,50 153,35 180,50 180,80 153,95 126,80"/>
       <polygon points="180,50 212,60 212,92 180,100 180,80"/>
       <line x1="45" y1="125" x2="26" y2="136"/>
     </g>
     <text x="16" y="144" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#c0392b" text-anchor="middle">HO</text>
   </svg>`},

  {id:39,cat:"Metabolism & Organic",name:"Triacylglycerol (Triglyceride)",info:"Glycerol backbone esterified to three fatty acid chains • Primary long-term energy storage lipid in adipocytes.",
   svg:`<svg viewBox="0 0 250 155" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="45" y1="35" x2="45" y2="125"/>
       <line x1="45" y1="35" x2="90" y2="35"/>
       <line x1="45" y1="80" x2="90" y2="80"/>
       <line x1="45" y1="125" x2="90" y2="125"/>
       <polyline points="115,35 140,25 165,35 190,25 215,35"/>
       <polyline points="115,80 140,70 165,80 190,70 215,80"/>
       <polyline points="115,125 140,115 165,125 190,115 215,125"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#c0392b" text-anchor="middle">
       <text x="102" y="39">O-CO-</text><text x="102" y="84">O-CO-</text><text x="102" y="129">O-CO-</text>
     </g>
   </svg>`},

  {id:40,cat:"Metabolism & Organic",name:"Glycerophospholipid (Phospholipid)",info:"Glycerol + 2 hydrophobic fatty acid tails + 1 hydrophilic phosphate head group • Major component of cell membranes.",
   svg:`<svg viewBox="0 0 250 155" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="45" y1="35" x2="45" y2="125"/>
       <line x1="45" y1="35" x2="90" y2="35"/>
       <line x1="45" y1="80" x2="90" y2="80"/>
       <line x1="45" y1="125" x2="95" y2="125"/>
       <polyline points="115,35 140,25 165,35 190,25 215,35"/>
       <polyline points="115,80 140,70 165,80 190,70 215,80"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="102" y="39" fill="#c0392b">O-CO-</text>
       <text x="102" y="84" fill="#c0392b">O-CO-</text>
       <text x="148" y="129" fill="#2e9e4f">O—PO₃²⁻—Head</text>
     </g>
   </svg>`},

  // ================= DISACCHARIDES =================
  {id:41,cat:"Carbohydrates",name:"Sucrose (Glucose-α1,2β-Fructose)",info:"Non-reducing disaccharide • Both anomeric carbons (C1 of glucose, C2 of fructose) are locked in the glycosidic bond (no free hemiacetal).",
   svg:`<svg viewBox="0 0 260 140" width="100%" style="max-height:180px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="35,45 75,45 95,70 75,95 35,95 15,70"/>
       <polyline points="95,70 120,85 145,70"/>
       <polygon points="175,45 215,70 200,105 155,105 145,70"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="75" y="48" fill="#c0392b">O</text>
       <text x="120" y="102" fill="#2e9e4f">O (α1↔2β)</text>
       <text x="175" y="48" fill="#c0392b">O</text>
       <text x="55" y="125" fill="#1f3a5f">Glucose</text>
       <text x="180" y="125" fill="#1f3a5f">Fructose</text>
     </g>
   </svg>`},

  {id:42,cat:"Carbohydrates",name:"Lactose (Galactose-β1,4-Glucose)",info:"Reducing disaccharide • Galactose C1 (-OH up) linked β(1→4) to Glucose C4 • Cleaved by lactase.",
   svg:`<svg viewBox="0 0 260 140" width="100%" style="max-height:180px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="35,45 75,45 95,70 75,95 35,95 15,70"/>
       <polyline points="95,70 120,55 145,70"/>
       <polygon points="165,45 205,45 225,70 205,95 165,95 145,70"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="75" y="48" fill="#c0392b">O</text>
       <text x="120" y="48" fill="#2e9e4f">O (β1→4)</text>
       <text x="205" y="48" fill="#c0392b">O</text>
       <text x="55" y="120" fill="#1f3a5f">Galactose</text>
       <text x="185" y="120" fill="#1f3a5f">Glucose</text>
     </g>
   </svg>`},

  {id:43,cat:"Carbohydrates",name:"Maltose (Glucose-α1,4-Glucose)",info:"Reducing disaccharide • Two D-glucose units linked α(1→4) • Product of starch digestion by amylase.",
   svg:`<svg viewBox="0 0 260 140" width="100%" style="max-height:180px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="35,45 75,45 95,70 75,95 35,95 15,70"/>
       <polyline points="95,70 120,88 145,70"/>
       <polygon points="165,45 205,45 225,70 205,95 165,95 145,70"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="75" y="48" fill="#c0392b">O</text>
       <text x="120" y="105" fill="#2e9e4f">O (α1→4)</text>
       <text x="205" y="48" fill="#c0392b">O</text>
       <text x="55" y="120" fill="#1f3a5f">Glucose</text>
       <text x="185" y="120" fill="#1f3a5f">Glucose</text>
     </g>
   </svg>`},

  // ================= VITAMINS & COFACTORS =================
  {id:44,cat:"Vitamins & Cofactors",name:"Nicotinamide Ring (NAD⁺ / NADH)",info:"Derived from Vitamin B3 (Niacin) • Carries 2 electrons as a hydride ion (H⁻) at C4 of the pyridine ring.",
   svg:`<svg viewBox="0 0 220 155" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="100,45 132,63 132,99 100,117 68,99 68,63"/>
       <line x1="74" y1="67" x2="74" y2="95"/><line x1="126" y1="67" x2="126" y2="95"/>
       <line x1="132" y1="63" x2="162" y2="48"/>
       <line x1="160" y1="48" x2="160" y2="24"/><line x1="165" y1="48" x2="165" y2="24"/>
       <line x1="162" y1="48" x2="188" y2="62"/>
       <line x1="100" y1="117" x2="100" y2="140"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="100" y="122" fill="#2e9e4f">N⁺</text>
       <text x="162" y="18" fill="#c0392b">O</text>
       <text x="202" y="68" fill="#1f3a5f">NH₂</text>
       <text x="100" y="152" fill="#555">Ribose-ADP</text>
     </g>
   </svg>`},

  {id:45,cat:"Vitamins & Cofactors",name:"Flavin Isoalloxazine Ring (FAD / FADH₂)",info:"Derived from Vitamin B2 (Riboflavin) • Three fused rings (tricyclic) • Can transfer 1 or 2 electrons; covalently bound in Complex II.",
   svg:`<svg viewBox="0 0 250 140" width="100%" style="max-height:180px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.1" fill="none">
       <polygon points="45,50 75,35 105,50 105,85 75,100 45,85"/>
       <polygon points="105,50 135,35 165,50 165,85 135,100 105,85"/>
       <polygon points="165,50 195,35 225,50 225,85 195,100 165,85"/>
       <line x1="45" y1="50" x2="25" y2="40"/><line x1="45" y1="85" x2="25" y2="95"/>
       <line x1="195" y1="35" x2="195" y2="15"/><line x1="225" y1="85" x2="242" y2="95"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="14" y="42" fill="#1f3a5f">H₃C</text><text x="14" y="102" fill="#1f3a5f">H₃C</text>
       <text x="135" y="38" fill="#2e9e4f">N</text><text x="135" y="106" fill="#2e9e4f">N</text>
       <text x="195" y="12" fill="#c0392b">=O</text><text x="245" y="104" fill="#c0392b">=O</text>
     </g>
   </svg>`},

  {id:46,cat:"Vitamins & Cofactors",name:"Heme Group (Protoporphyrin IX + Fe²⁺)",info:"Four pyrrole rings linked by methine bridges coordinating a central Fe²⁺ ion • Prosthetic group in hemoglobin, myoglobin, and cytochromes.",
   svg:`<svg viewBox="0 0 220 165" width="100%" style="max-height:195px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2" fill="none">
       <rect x="45" y="25" width="130" height="115" rx="18"/>
       <line x1="110" y1="45" x2="110" y2="68"/><line x1="110" y1="98" x2="110" y2="122"/>
       <line x1="65" y1="82" x2="90" y2="82"/><line x1="130" y1="82" x2="155" y2="82"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="110" y="87" fill="#c0392b" font-size="15">Fe²⁺</text>
       <text x="110" y="40" fill="#1f3a5f">N</text><text x="110" y="134" fill="#1f3a5f">N</text>
       <text x="58" y="87" fill="#1f3a5f">N</text><text x="162" y="87" fill="#1f3a5f">N</text>
     </g>
   </svg>`},

  {id:47,cat:"Vitamins & Cofactors",name:"Vitamin C (Ascorbic Acid)",info:"Water-soluble lactone (cyclic ester) antioxidant • Required cofactor for prolyl & lysyl hydroxylase in collagen synthesis.",
   svg:`<svg viewBox="0 0 230 155" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="110,40 155,70 138,118 82,118 65,70"/>
       <line x1="88" y1="112" x2="132" y2="112"/>
       <line x1="155" y1="70" x2="182" y2="55"/>
       <line x1="138" y1="118" x2="155" y2="140"/>
       <line x1="82" y1="118" x2="65" y2="140"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="110" y="44" fill="#c0392b" font-size="15">O</text>
       <text x="192" y="56" fill="#c0392b">=O</text>
       <text x="162" y="152" fill="#2e9e4f">OH</text>
       <text x="58" y="152" fill="#2e9e4f">OH</text>
     </g>
   </svg>`},

  {id:48,cat:"Vitamins & Cofactors",name:"Vitamin D₃ (Cholecalciferol)",info:"Fat-soluble secosteroid (broken B-ring) synthesized from 7-dehydrocholesterol via UV light • Increases intestinal Ca²⁺ absorption.",
   svg:`<svg viewBox="0 0 250 155" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="35,90 62,75 89,90 89,120 62,135 35,120"/>
       <polyline points="89,90 115,75 135,88"/>
       <polygon points="135,55 162,40 189,55 189,85 162,100 135,85"/>
       <polygon points="189,55 218,65 218,95 189,102"/>
       <line x1="35" y1="120" x2="18" y2="130"/>
     </g>
     <text x="12" y="138" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#c0392b" text-anchor="middle">HO</text>
   </svg>`},

  // ================= NEUROTRANSMITTERS & HORMONES =================
  {id:49,cat:"Neurotransmitters & Hormones",name:"Dopamine (Catecholamine)",info:"Catechol ring (benzene with TWO adjacent -OH groups) + ethylamine chain • Derived from Tyrosine; rewards/motor control.",
   svg:`<svg viewBox="0 0 250 145" width="100%" style="max-height:180px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="75,55 105,38 135,55 135,90 105,107 75,90"/>
       <circle cx="105" cy="72" r="18"/>
       <line x1="75" y1="55" x2="50" y2="42"/><line x1="75" y1="90" x2="50" y2="103"/>
       <polyline points="135,55 168,38 198,55 222,42"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="36" y="42" fill="#c0392b">HO</text><text x="36" y="110" fill="#c0392b">HO</text>
       <text x="234" y="44" fill="#2e9e4f">NH₂</text>
     </g>
   </svg>`},

  {id:50,cat:"Neurotransmitters & Hormones",name:"Epinephrine (Adrenaline)",info:"Catecholamine with a beta-OH group AND an N-methyl (-NH-CH₃) group • Fight-or-flight hormone secreted by adrenal medulla.",
   svg:`<svg viewBox="0 0 265 145" width="100%" style="max-height:180px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="65,55 95,38 125,55 125,90 95,107 65,90"/>
       <circle cx="95" cy="72" r="18"/>
       <line x1="65" y1="55" x2="42" y2="42"/><line x1="65" y1="90" x2="42" y2="103"/>
       <polyline points="125,55 158,38 188,55 215,42"/>
       <line x1="158" y1="38" x2="158" y2="14"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="28" y="42" fill="#c0392b">HO</text><text x="28" y="110" fill="#c0392b">HO</text>
       <text x="158" y="11" fill="#c0392b">OH</text>
       <text x="238" y="44" fill="#2e9e4f">NH—CH₃</text>
     </g>
   </svg>`},

  {id:51,cat:"Neurotransmitters & Hormones",name:"Serotonin (5-Hydroxytryptamine / 5-HT)",info:"Indole bicyclic ring with a 5-OH group • Derived from Tryptophan • Regulates mood, sleep, and GI motility.",
   svg:`<svg viewBox="0 0 260 150" width="100%" style="max-height:185px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polygon points="75,55 105,38 135,55 135,90 105,107 75,90"/>
       <circle cx="105" cy="72" r="17"/>
       <polygon points="135,55 168,45 186,72 168,100 135,90"/>
       <line x1="75" y1="55" x2="50" y2="42"/>
       <polyline points="168,45 198,28 228,45"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="36" y="42" fill="#c0392b">HO</text>
       <text x="170" y="114" fill="#1f3a5f">NH</text>
       <text x="242" y="48" fill="#2e9e4f">NH₂</text>
     </g>
   </svg>`},

  {id:52,cat:"Neurotransmitters & Hormones",name:"Acetylcholine (ACh)",info:"Acetyl ester of choline (CH₃-CO-O-CH₂-CH₂-N⁺(CH₃)₃) • Primary neurotransmitter at neuromuscular junctions and autonomic ganglia.",
   svg:`<svg viewBox="0 0 265 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polyline points="35,75 68,55 100,75 132,55 164,75 196,55"/>
       <line x1="66" y1="55" x2="66" y2="26"/><line x1="71" y1="55" x2="71" y2="26"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="22" y="80" fill="#1f3a5f">H₃C</text>
       <text x="68" y="20" fill="#c0392b">O</text>
       <text x="100" y="90" fill="#c0392b">O</text>
       <text x="225" y="58" fill="#2e9e4f">N⁺(CH₃)₃</text>
     </g>
   </svg>`},

  {id:53,cat:"Neurotransmitters & Hormones",name:"GABA (Gamma-Aminobutyric Acid)",info:"4-carbon amino acid (H₃N⁺-CH₂-CH₂-CH₂-COO⁻) • Synthesized by decarboxylation of Glutamate • Primary inhibitory CNS neurotransmitter.",
   svg:`<svg viewBox="0 0 260 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polyline points="55,70 88,50 120,70 152,50 184,70 212,54"/>
       <line x1="182" y1="70" x2="182" y2="98"/><line x1="187" y1="70" x2="187" y2="98"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="34" y="75" fill="#2e9e4f">H₃N⁺</text>
       <text x="184" y="112" fill="#c0392b">O</text>
       <text x="226" y="56" fill="#c0392b">O⁻</text>
     </g>
   </svg>`},

  {id:54,cat:"Neurotransmitters & Hormones",name:"Thyroxine (T₄ Thyroid Hormone)",info:"Two iodinated tyrosine rings with FOUR iodine atoms • Lipophilic amino acid derivative that binds intracellular nuclear receptors.",
   svg:`<svg viewBox="0 0 270 140" width="100%" style="max-height:180px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2" fill="none">
       <polygon points="50,55 75,40 100,55 100,85 75,100 50,85"/>
       <line x1="100" y1="70" x2="130" y2="70"/>
       <polygon points="130,55 155,40 180,55 180,85 155,100 130,85"/>
       <line x1="50" y1="70" x2="28" y2="70"/>
       <polyline points="180,70 208,55 232,70"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="18" y="74" fill="#c0392b">HO</text>
       <text x="115" y="65" fill="#c0392b">O</text>
       <text x="75" y="34" fill="#8e44ad">I</text><text x="75" y="114" fill="#8e44ad">I</text>
       <text x="155" y="34" fill="#8e44ad">I</text><text x="155" y="114" fill="#8e44ad">I</text>
       <text x="248" y="74" fill="#1f3a5f">Ala</text>
     </g>
   </svg>`},

  // ================= KREBS / GLYCOLYSIS & LIPIDS =================
  {id:55,cat:"Metabolism & Organic",name:"Succinate (Symmetric 4-C Dicarboxylate)",info:"4-carbon dicarboxylate (⁻OOC-CH₂-CH₂-COO⁻) • Oxidized to Fumarate by succinate dehydrogenase (Complex II) to produce FADH₂.",
   svg:`<svg viewBox="0 0 250 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polyline points="55,65 92,45 128,65 164,45 198,65"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#c0392b" text-anchor="middle">
       <text x="34" y="70">⁻OOC</text><text x="218" y="70">COO⁻</text>
     </g>
   </svg>`},

  {id:56,cat:"Metabolism & Organic",name:"Fumarate (Trans-4-C Unsaturated Dicarboxylate)",info:"Trans double bond between two carboxylate groups (⁻OOC-CH=CH-COO⁻) • Hydrated by fumarase to form L-malate.",
   svg:`<svg viewBox="0 0 250 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="55" y1="65" x2="95" y2="45"/>
       <line x1="95" y1="45" x2="155" y2="75"/><line x1="97" y1="40" x2="157" y2="70"/>
       <line x1="155" y1="75" x2="195" y2="55"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#c0392b" text-anchor="middle">
       <text x="34" y="70">⁻OOC</text><text x="216" y="58">COO⁻</text>
     </g>
   </svg>`},

  {id:57,cat:"Metabolism & Organic",name:"Glyceraldehyde-3-Phosphate (G3P)",info:"3-carbon aldose phosphate (CHO-CH(OH)-CH₂-OPO₃²⁻) • Oxidized & phosphorylated by GAPDH to yield NADH + 1,3-BPG.",
   svg:`<svg viewBox="0 0 250 135" width="100%" style="max-height:175px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polyline points="55,75 95,50 135,75 175,50"/>
       <line x1="53" y1="75" x2="53" y2="45"/><line x1="58" y1="75" x2="58" y2="45"/>
       <line x1="95" y1="50" x2="95" y2="22"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="55" y="40" fill="#c0392b">O</text>
       <text x="42" y="84" fill="#1f3a5f">H</text>
       <text x="95" y="16" fill="#c0392b">OH</text>
       <text x="206" y="54" fill="#2e9e4f">O—PO₃²⁻</text>
     </g>
   </svg>`},

  {id:58,cat:"Metabolism & Organic",name:"Sphingosine Backbone (Sphingolipids)",info:"Long-chain amino alcohol (has -OH at C1, -NH₂ at C2, -OH at C3, and trans double bond) • Forms ceramides, sphingomyelin, and gangliosides.",
   svg:`<svg viewBox="0 0 250 135" width="100%" style="max-height:175px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polyline points="45,70 85,50 125,70 165,50 205,70"/>
       <line x1="165" y1="45" x2="205" y2="65"/>
       <line x1="85" y1="50" x2="85" y2="22"/>
       <line x1="125" y1="70" x2="125" y2="98"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="13" font-weight="700" text-anchor="middle">
       <text x="30" y="76" fill="#c0392b">HO</text>
       <text x="85" y="16" fill="#2e9e4f">NH₂</text>
       <text x="125" y="112" fill="#c0392b">OH</text>
       <text x="225" y="74" fill="#1f3a5f">R_tail</text>
     </g>
   </svg>`},

  // ================= HIGH-YIELD FUNCTIONAL GROUPS =================
  {id:59,cat:"Organic Functional Groups",name:"Peptide / Amide Bond (-C(=O)-NH-)",info:"Planar with ~40% partial double-bond character due to resonance • Trans configuration favored; broken by hydrolysis.",
   svg:`<svg viewBox="0 0 240 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="50" y1="75" x2="95" y2="55"/>
       <line x1="93" y1="55" x2="93" y2="24"/><line x1="98" y1="55" x2="98" y2="24"/>
       <line x1="95" y1="55" x2="145" y2="75"/>
       <line x1="145" y1="75" x2="190" y2="55"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="36" y="80" fill="#1f3a5f">R₁</text>
       <text x="95" y="18" fill="#c0392b">O</text>
       <text x="145" y="92" fill="#2e9e4f">NH</text>
       <text x="204" y="58" fill="#1f3a5f">R₂</text>
     </g>
   </svg>`},

  {id:60,cat:"Organic Functional Groups",name:"Hemiacetal vs. Acetal (Sugar Rings)",info:"Hemiacetal: carbon bonded to -OH and -OR (reducing sugar) • Acetal: carbon bonded to TWO -OR groups (locked glycosidic bond).",
   svg:`<svg viewBox="0 0 250 130" width="100%" style="max-height:170px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="65" y1="65" x2="40" y2="42"/><line x1="65" y1="65" x2="90" y2="42"/>
       <line x1="65" y1="65" x2="40" y2="88"/><line x1="65" y1="65" x2="90" y2="88"/>
       <line x1="185" y1="65" x2="160" y2="42"/><line x1="185" y1="65" x2="210" y2="42"/>
       <line x1="185" y1="65" x2="160" y2="88"/><line x1="185" y1="65" x2="210" y2="88"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">
       <text x="32" y="38" fill="#c0392b">OH</text><text x="98" y="38" fill="#2e9e4f">OR</text>
       <text x="32" y="98" fill="#1f3a5f">R</text><text x="98" y="98" fill="#1f3a5f">H</text>
       <text x="65" y="118" fill="#555">Hemiacetal</text>
       <text x="152" y="38" fill="#2e9e4f">OR'</text><text x="218" y="38" fill="#2e9e4f">OR''</text>
       <text x="152" y="98" fill="#1f3a5f">R</text><text x="218" y="98" fill="#1f3a5f">H</text>
       <text x="185" y="118" fill="#555">Acetal</text>
     </g>
   </svg>`},

  {id:61,cat:"Organic Functional Groups",name:"Imine / Schiff Base (C=N)",info:"Nitrogen analog of a carbonyl (R₂C=NR') • Formed when a primary amine attacks an aldehyde/ketone (e.g., PLP cofactor binding lysine).",
   svg:`<svg viewBox="0 0 220 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <line x1="65" y1="45" x2="105" y2="68"/><line x1="65" y1="90" x2="105" y2="68"/>
       <line x1="105" y1="65" x2="155" y2="65"/><line x1="105" y1="71" x2="155" y2="71"/>
       <line x1="172" y1="62" x2="200" y2="44"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="52" y="46" fill="#1f3a5f">R₁</text><text x="52" y="95" fill="#1f3a5f">R₂</text>
       <text x="165" y="73" fill="#2e9e4f">N</text>
       <text x="210" y="44" fill="#1f3a5f">R'</text>
     </g>
   </svg>`},

  {id:62,cat:"Organic Functional Groups",name:"Acid Anhydride / Phosphoanhydride Bond",info:"Two acyl or phosphoryl groups linked by an oxygen atom (-CO-O-CO- or -PO₂⁻-O-PO₂⁻-) • High-energy bonds in ATP.",
   svg:`<svg viewBox="0 0 250 120" width="100%" style="max-height:165px;display:block;margin:auto">
     <g stroke="#1f3a5f" stroke-width="2.2" fill="none">
       <polyline points="45,75 82,55 125,75 168,55 205,75"/>
       <line x1="80" y1="55" x2="80" y2="25"/><line x1="85" y1="55" x2="85" y2="25"/>
       <line x1="166" y1="55" x2="166" y2="25"/><line x1="171" y1="55" x2="171" y2="25"/>
     </g>
     <g font-family="system-ui,sans-serif" font-size="14" font-weight="700" text-anchor="middle">
       <text x="32" y="80" fill="#1f3a5f">R</text><text x="218" y="80" fill="#1f3a5f">R'</text>
       <text x="82" y="20" fill="#c0392b">O</text>
       <text x="125" y="92" fill="#2e9e4f">O</text>
       <text x="168" y="20" fill="#c0392b">O</text>
     </g>
   </svg>`}
];
