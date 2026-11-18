const SYLLABUS = [
  {
    id: "bio",
    subject: "1. Biology",
    topics: [
      {
        id: "bio-1",
        title: "1. The Cell & Microbiology",
        items: [
          "Cell Organelles: Nucleoid vs. Nucleus & Nucleolus",
          "Cell Organelles: Ribosomes (Prokaryotic vs. Eukaryotic)",
          "Cell Organelles: Rough ER vs. Smooth ER",
          "Cell Organelles: Golgi Apparatus & Vesicular Transport (COPI, COPII, Clathrin)",
          "Cell Organelles: Peroxisomes, Lysosomes, Centrioles & Centrosomes",
          "Cell Organelles: Plasmids & Episomes",
          "Cytoskeleton: Microfilaments (Actin), Microtubules (Tubulin), Intermediate Filaments",
          "Eukaryotes vs. Prokaryotes (ETC location, ribosomes, division)",
          "Bacteria: Shapes (Bacilli, Cocci, Spirilla) & Oxygen Requirements",
          "Bacteria: Gram Staining (Gram-positive vs. Gram-negative)",
          "Bacterial Genetic Recombination: Transformation, Conjugation, Transduction, Transposons",
          "Subcellular Pathogens: Prions & Viroids",
          "Viruses: Structure, Genomes (+/- sense, retroviruses), & Life Cycles (Lytic vs. Lysogenic)",
          "Tissues: Epithelial (Parenchyma, layers, shapes) & Connective Tissue (Stroma, ECM)"
        ]
      },
      {
        id: "bio-2",
        title: "2. Reproduction & Cell Division",
        items: [
          "Cell Cycle: Interphase (G1, S, G2), M Phase, G0, & Regulation (Cyclins, CDKs, Rb, E2F, p53)",
          "Sex Chromosomes, X-linked Disorders, & SRY Gene",
          "Mitosis (PMAT) vs. Meiosis I & II (Crossing over, ploidy, Nondisjunction, Aneuploidy)",
          "Male Reproductive System: Spermatogenesis, Sertoli/Leydig cells, & SEVE(N) UP Pathway",
          "Female Reproductive System: Oogenesis, GnRH/FSH/LH, Estrogen/Progesterone, Menstrual Cycle"
        ]
      },
      {
        id: "bio-3",
        title: "3. Embryogenesis & Development",
        items: [
          "Early Development: Fertilization (Cortical reaction), Cleavage, Morula, Blastula, Implantation",
          "Gastrulation & Germ Layers: Ectoderm, Mesoderm, & Endoderm Derivatives",
          "Neurulation: Notochord, Neural Folds/Crest Cells (PNS), & Neural Tube (CNS)",
          "Stem Cell Potency, Determination, Differentiation, Induction, & Cell Signaling",
          "Fetal Circulation: Umbilical Vessels, HbF Affinity, & Fetal Shunts (Foramen ovale, Ductus arteriosus/venosus)"
        ]
      },
      {
        id: "bio-4",
        title: "4. The Nervous System",
        items: [
          "Neurons: Afferent, Efferent, Interneurons, Summation (Temporal/Spatial), & Myelin/Saltatory Conduction",
          "Action Potential Phases (Depolarization, Repolarization, Refractory Periods, Na+/K+ ATPase)",
          "Synapses: Ca2+ Influx, Exocytosis, & Neurotransmitter Removal",
          "Glial Cells (Astrocytes/BBB, Ependymal, Microglia, Schwann, Oligodendrocytes) & White vs. Gray Matter",
          "CNS vs. PNS: Reflex Arcs, Somatic vs. Autonomic (Sympathetic vs. Parasympathetic)"
        ]
      },
      {
        id: "bio-5",
        title: "5. The Endocrine System",
        items: [
          "Hormone Classes: Peptide (GPCR/cAMP) vs. Steroid (Nuclear receptors) vs. Amino Acid Derivatives",
          "Hypothalamus & Pituitary: Anterior (FLAT PEG) vs. Posterior (ADH, Oxytocin)",
          "Thyroid (T3/T4, Calcitonin) & Parathyroid (PTH, Vitamin D)",
          "Adrenal Cortex (Cortisol, Aldosterone, Androgens) & Adrenal Medulla (Epi/Norepi)",
          "Pancreas (Insulin, Glucagon, Somatostatin), Gonads, & Pineal Gland (Melatonin)"
        ]
      },
      {
        id: "bio-6",
        title: "6. The Respiratory System",
        items: [
          "Airway Pathway, Alveoli, Surfactant, & Pleura (Parietal vs. Visceral)",
          "Mechanics of Breathing (Negative pressure inhalation vs. exhalation) & Spirometry Volumes/Capacities",
          "Medulla Oblongata Control & Bicarbonate Buffer System (CO2/pH regulation)"
        ]
      },
      {
        id: "bio-7",
        title: "7. The Cardiovascular System",
        items: [
          "Heart Anatomy, Blood Flow Pathway, & Electrical Conduction (SA -> AV -> His -> Purkinje)",
          "Systole vs. Diastole, Cardiac Output (CO = HR x SV), & BP Regulation (ANP, Aldosterone, ADH)",
          "Vasculature (Arteries, Capillaries, Veins) & Fluid Balance (Hydrostatic vs. Oncotic Pressure)",
          "Blood Components, ABO/Rh Blood Types, & Coagulation Cascade (Thrombin, Fibrin, Plasmin)"
        ]
      },
      {
        id: "bio-8",
        title: "8. The Immune & Lymphatic Systems",
        items: [
          "Innate Immunity: Non-cellular (Skin, Mucus, Lysozymes, Complement, Interferons) & Cellular (NK, Granulocytes)",
          "MHC Class I (All nucleated -> CD8) vs. MHC Class II (APCs -> CD4)",
          "Adaptive Immunity: Humoral (B cells, Plasma cells, Antibodies) vs. Cell-Mediated (T cells, Selection)",
          "Lymphatic System: Lymph nodes, Thoracic duct, Fluid equalization, & Chylomicron transport"
        ]
      },
      {
        id: "bio-9",
        title: "9. The Digestive System",
        items: [
          "GI Pathway, Peristalsis, & Mechanical vs. Chemical Digestion",
          "Stomach Secretory Cells (Mucous, Chief/Pepsinogen, Parietal/HCl & Intrinsic Factor, G cells/Gastrin)",
          "Small Intestine (Duodenum brush border enzymes, Jejunum/Ileum villi & lacteals) & Large Intestine",
          "Digestive Hormones (Secretin, CCK, Ghrelin, Leptin) & Accessory Organs (Pancreas, Liver, Gallbladder)"
        ]
      },
      {
        id: "bio-10",
        title: "10. Excretory & Integumentary Systems",
        items: [
          "Kidney & Nephron Anatomy, Renal Portal System, & Filtration/Secretion/Reabsorption",
          "Nephron Segments (PCT, Loop of Henle Countercurrent Multiplier, DCT, Collecting Duct) & Aldosterone/ADH",
          "Skin Layers (Epidermis strata, Dermis, Hypodermis), Langerhans/Melanocytes, & Thermoregulation"
        ]
      },
      {
        id: "bio-11",
        title: "11. The Musculoskeletal System",
        items: [
          "Muscle Types: Skeletal (Red vs. White fibers), Smooth, & Cardiac (Intercalated discs)",
          "Sarcomere Anatomy (Actin, Myosin, Troponin, Tropomyosin, Z/M/I/H/A bands) & Sliding Filament Model",
          "Skeletal System: Compact vs. Spongy Bone, Ligaments/Tendons, & Bone Remodeling (Osteoblasts/Osteoclasts)"
        ]
      },
      {
        id: "bio-12",
        title: "12. Genetics & Evolution",
        items: [
          "Mendelian Genetics, Dominance Types, Penetrance, Expressivity, & Landmark DNA Experiments",
          "Mutations: Nucleotide (Point, Silent, Missense, Nonsense, Frameshift) & Chromosomal Mutations",
          "Population Genetics: Hardy-Weinberg Principle, Recombination Frequency, & Evolution Mechanisms"
        ]
      }
    ]
  },
  {
    id: "gchem",
    subject: "2. General Chemistry",
    topics: [
      {
        id: "gchem-1",
        title: "1. Atomic Structure",
        items: [
          "Mass Number (A), Atomic Number (Z), Isotopes, & Weighted Atomic Mass",
          "Atomic Models (Rutherford, Bohr), Heisenberg Uncertainty Principle, Hund's Rule, & Pauli Exclusion",
          "Quantum Numbers (n, l, ml, ms), Orbital Shapes, Subshell Capacities, & Aufbau Principle",
          "Paramagnetic vs. Diamagnetic & Free Radicals"
        ]
      },
      {
        id: "gchem-2",
        title: "2. The Periodic Table",
        items: [
          "Periodic Table Classifications (Alkali, Alkaline Earth, Transition, Metalloids, Halogens, Noble Gases)",
          "Periodic Trends: Zeff, Ionization Energy, Electron Affinity, Electronegativity, & Atomic/Ionic Radius"
        ]
      },
      {
        id: "gchem-3",
        title: "3. Bonding & Chemical Interactions",
        items: [
          "Covalent (Polar, Non-polar, Coordinate), Ionic Bonds, Bond Order, & Sigma vs. Pi Bonds",
          "Intermolecular Forces: Hydrogen Bonding, Dipole-Dipole, & London Dispersion Forces",
          "Formal Charges, VSEPR Molecular Geometries, & Hybridization (sp, sp2, sp3)"
        ]
      },
      {
        id: "gchem-4",
        title: "4. Compounds & Stoichiometry",
        items: [
          "Molarity, Equivalents, Naming Ions/Oxyanions/Oxyacids, & Chemical Reaction Types"
        ]
      },
      {
        id: "gchem-5",
        title: "5. Chemical Kinetics & Equilibrium",
        items: [
          "Reaction Orders (0th, 1st, 2nd), Rate Laws, Half-Lives, & Integrated Rate Graphs",
          "Reaction Mechanisms, Rate-Determining Step, & Arrhenius Equation",
          "Equilibrium Constant (Keq), Reaction Quotient (Q), Le Chatelier's Principle, & Kinetic vs. Thermodynamic Control"
        ]
      },
      {
        id: "gchem-6",
        title: "6. Thermochemistry",
        items: [
          "Systems (Isolated, Closed, Open) & Processes (Isothermal, Adiabatic, Isobaric, Isovolumetric)",
          "Phase Changes, Triple Point, Supercritical Fluid, & State Functions",
          "Enthalpy (Hess's Law, Bond Dissociation), Entropy (Delta S), & Gibbs Free Energy (Delta G = Delta H - T Delta S)"
        ]
      },
      {
        id: "gchem-7",
        title: "7. The Gas Phase",
        items: [
          "Ideal Gas Law (PV = nRT), STP, Gas Density, & Combined/Avogadro's/Dalton's/Henry's Laws",
          "Real Gases (Van der Waals), Kinetic Molecular Theory, Root-Mean-Square Speed, Diffusion & Graham's Law"
        ]
      },
      {
        id: "gchem-8",
        title: "8. Solutions",
        items: [
          "Solvation, Solubility Rules, Complex Ions, & Concentration Units (Molarity, Molality, Normality, % Mass)",
          "Dilutions (M1V1 = M2V2), Solubility Product (Ksp vs. IP), & Common Ion Effect",
          "Colligative Properties: Vapor Pressure Depression (Raoult's Law), Boiling Point Elevation, Freezing Point Depression, Osmotic Pressure"
        ]
      },
      {
        id: "gchem-9",
        title: "9. Acids & Bases",
        items: [
          "Acid/Base Definitions (Arrhenius, Bronsted-Lowry, Lewis), Amphoteric Species, & Polyprotic Acids",
          "pH, pOH, Kw, Ka, Kb, Strong vs. Weak Acids/Bases, & Conjugate Pairs",
          "Buffers, Henderson-Hasselbalch Equation, & Acid-Base Titrations (Equivalence & Half-Equivalence Points)"
        ]
      },
      {
        id: "gchem-10",
        title: "10. Oxidation-Reduction & Electrochemistry",
        items: [
          "Oxidation States, Oxidizing vs. Reducing Agents, Net Ionic Equations, & Half-Reaction Balancing",
          "Galvanic vs. Electrolytic Cells (Anode vs. Cathode), Concentration Cells, & Salt Bridges",
          "Standard Reduction Potentials, Cell EMF, Thermodynamics (Delta G = -nFE), & Nernst Equation"
        ]
      }
    ]
  },
  {
    id: "phys",
    subject: "3. Physics & Math",
    topics: [
      {
        id: "phys-1",
        title: "1. Kinematics & Dynamics",
        items: [
          "Vectors vs. Scalars, Vector Addition/Subtraction, Dot Product, & Cross Product (Right-Hand Rule)",
          "Displacement, Velocity, Acceleration, & Mechanical Equilibrium (Translational & Rotational)",
          "Forces: Gravity, Normal Force, Friction (Static vs. Kinetic), & Torque",
          "Newton's Laws of Motion, Linear Kinematics Equations, Projectile Motion, Inclined Planes, & Circular Motion"
        ]
      },
      {
        id: "phys-2",
        title: "2. Work & Energy",
        items: [
          "Kinetic Energy, Potential Energy (Gravitational, Elastic), & Conservative vs. Non-Conservative Forces",
          "Work (W = Fd cos theta), Power, Work-Energy Theorem, & Mechanical Advantage / Simple Machines"
        ]
      },
      {
        id: "phys-3",
        title: "3. Thermodynamics",
        items: [
          "Zeroth Law, Thermal Expansion, Systems, State vs. Process Functions, & First Law (Delta U = Q - W)",
          "Specific Heat (q = mc Delta T), Heat of Transformation (q = mL), Constant-Variable Processes, & Second Law (Entropy)"
        ]
      },
      {
        id: "phys-4",
        title: "4. Fluids",
        items: [
          "Fluid Characteristics, Density, Specific Gravity, Absolute vs. Gauge Pressure, & Hydrostatics (Pascal's & Archimedes' Principles)",
          "Cohesion, Adhesion, Surface Tension, & Fluid Dynamics (Viscosity, Laminar vs. Turbulent, Poiseuille's Law)",
          "Continuity Equation (Q = Av), Bernoulli's Equation, Venturi Effect, & Circulatory/Respiratory Fluid Physiology"
        ]
      },
      {
        id: "phys-5",
        title: "5. Electrostatics & Magnetism",
        items: [
          "Charge, Coulomb's Law, Electric Field, Field Lines, Equipotential Lines, & Electric Dipoles",
          "Electric Potential Energy & Voltage (V = W/q)",
          "Magnetism: Magnetic Fields (Wires & Loops), Magnetic Materials, & Magnetic Force on Moving Charges/Wires"
        ]
      },
      {
        id: "phys-6",
        title: "6. Circuits",
        items: [
          "Current, Conductors vs. Insulators, Kirchhoff's Laws (Junction & Loop Rules), & Ohm's Law (V = IR)",
          "Resistors & Capacitors in Series vs. Parallel, Capacitance, Dielectrics, & Circuit Meters (Ammeter, Voltmeter, Ohmmeter)"
        ]
      },
      {
        id: "phys-7",
        title: "7. Waves & Sound",
        items: [
          "Transverse vs. Longitudinal Waves, Wave Speed (v = f lambda), Interference, Standing Waves, Resonance, & Damping",
          "Sound Propagation, Intensity, Doppler Effect, Open vs. Closed Pipes, Harmonics, & Ultrasound"
        ]
      },
      {
        id: "phys-8",
        title: "8. Light & Optics",
        items: [
          "Electromagnetic Spectrum, Hydrogen Spectral Series (Lyman, Balmer, Paschen), & Rydberg Formula",
          "Diffraction, Young's Double-Slit Experiment, & Polarization (Plane vs. Circular)",
          "Reflection & Spherical/Plane Mirrors (Concave vs. Convex, Real vs. Virtual Images)",
          "Refraction, Snell's Law, Total Internal Reflection, Critical Angle, & Thin Lenses (Converging vs. Diverging)"
        ]
      },
      {
        id: "phys-9",
        title: "9. Atomic & Nuclear Phenomena",
        items: [
          "Photoelectric Effect (Work Function, Threshold Frequency), Bohr Model Emission/Absorption, & Fluorescence",
          "Nuclear Binding Energy, Mass Defect, Fusion vs. Fission, Radioactive Decay (Alpha, Beta-, Beta+, Gamma, Electron Capture), & Half-Life"
        ]
      },
      {
        id: "phys-10",
        title: "10. Math & Data Analysis",
        items: [
          "Scientific Notation, Estimation, Trigonometry, Logarithms, & Graph Interpretation",
          "Scientific Method, Research & Medical Ethics, Study Designs (Cohort, Cross-sectional, Case-control), & Biases",
          "Biostatistics: Central Tendency, Normal/Skewed Distributions, Hypothesis Testing (p-values, Type I & II Errors)"
        ]
      }
    ]
  },
  {
    id: "ochem",
    subject: "4. Organic Chemistry",
    topics: [
      {
        id: "ochem-1",
        title: "1. Nomenclature",
        items: [
          "IUPAC Naming Rules, Priority Order, Alkanes, Alkenes, Alkynes, & Branched Substituents (Isopropyl, sec-butyl, tert-butyl)",
          "Functional Group Naming: Alcohols, Ethers, Aldehydes, Ketones, Carboxylic Acids, Esters, & Amides"
        ]
      },
      {
        id: "ochem-2",
        title: "2. Isomers",
        items: [
          "Structural (Constitutional) Isomers vs. Stereoisomers",
          "Conformational Isomers (Newman Projections: Anti, Gauche, Eclipsed; Cyclohexane Axial vs. Equatorial)",
          "Configurational Isomers: Chiral Centers, Enantiomers, Optical Activity, Racemic Mixtures, & Meso Compounds",
          "Diastereomers, Cis-Trans Isomers, E/Z Configuration, R/S Absolute Configuration, & Fischer Projections"
        ]
      },
      {
        id: "ochem-3",
        title: "3. Bonding",
        items: [
          "Atomic & Molecular Orbitals (Bonding vs. Antibonding), Sigma & Pi Bonds, Hybridization (sp, sp2, sp3), Resonance, & Conjugation"
        ]
      },
      {
        id: "ochem-4",
        title: "4. Analyzing Organic Reactions",
        items: [
          "Lewis Acids/Bases, Nucleophiles, Electrophiles, Leaving Groups, & Chemoselectivity / Steric Hindrance",
          "SN1, SN2, E1, & E2 Mechanisms, Kinetics, Stereochemistry, & Polar Protic vs. Aprotic Solvents"
        ]
      },
      {
        id: "ochem-5",
        title: "5. Alcohols & Phenols",
        items: [
          "Properties, Acidity of Phenols vs. Alcohols, Quinones, Ubiquinone, & Mesylates / Tosylates",
          "Oxidation & Reduction Reagents (PCC, CrO3/KMnO4, NaBH4, LiAlH4) & Protecting Groups (Acetals & Ketals)"
        ]
      },
      {
        id: "ochem-6",
        title: "6. Aldehydes & Ketones I",
        items: [
          "Carbonyl Polarity, Boiling Points, & Nucleophilic Addition Reactions (Hydration, Hemiacetals/Acetals, Imines/Enamines)"
        ]
      },
      {
        id: "ochem-7",
        title: "7. Aldehydes & Ketones II",
        items: [
          "Alpha-Hydrogen Acidity, Keto-Enol Tautomerism, Kinetic vs. Thermodynamic Enolates, & Michael Addition",
          "Aldol Addition & Aldol Condensation (Dehydration to Enones)"
        ]
      },
      {
        id: "ochem-8",
        title: "8. Carboxylic Acids",
        items: [
          "Properties, Dimerization, Resonance Acidity Stabilization, Synthesis, & Decarboxylation",
          "Nucleophilic Acyl Substitution, Acid Halides (SOCl2, PBr3), Saponification, & Micelles"
        ]
      },
      {
        id: "ochem-9",
        title: "9. Carboxylic Acid Derivatives",
        items: [
          "Amides (Lactams), Esters (Lactones, Fischer Esterification, Transesterification), & Anhydrides",
          "Relative Reactivity Order (Acid Chlorides > Anhydrides > Esters > Amides > Carboxylates), Induction, & Ring Strain"
        ]
      },
      {
        id: "ochem-10",
        title: "10. Nitrogen- & Phosphorus-Containing Compounds",
        items: [
          "Amino Acid Chirality, Amphoteric Nature, Zwitterions, Peptide Bond Resonance, & Strecker/Gabriel Synthesis",
          "Phosphoric Acid, Pyrophosphate, Phosphodiester Bonds, & Organic Phosphates (ATP, GTP, DNA)"
        ]
      },
      {
        id: "ochem-11",
        title: "11. Spectroscopy",
        items: [
          "Infrared (IR) Spectroscopy (Key Peaks: O-H, N-H, C=O) & UV-Vis Spectroscopy (HOMO-LUMO, Conjugation)",
          "1H-NMR Spectroscopy (Chemical Shift, Shielding/Deshielding, Integration, Spin-Spin Splitting n+1) & Mass Spectrometry"
        ]
      },
      {
        id: "ochem-12",
        title: "12. Separations & Purifications",
        items: [
          "Extraction (Aqueous vs. Organic), Wash, Gravity & Vacuum Filtration, & Recrystallization",
          "Chromatography (TLC, Column, Ion-Exchange, Size-Exclusion, Affinity, Gas) & Distillation (Simple, Vacuum, Fractional)"
        ]
      }
    ]
  },
  {
    id: "biochem",
    subject: "5. Biochemistry",
    topics: [
      {
        id: "biochem-1",
        title: "1. Amino Acids, Peptides & Proteins",
        items: [
          "20 Amino Acids: Structures, Properties (Hydrophobic, Polar, Acidic, Basic), & Chirality",
          "Acid-Base Chemistry of Amino Acids: pKa, Titration Curves, Zwitterions, & Isoelectric Point (pI)",
          "Peptide Bond Formation/Hydrolysis & Protein Structure (Primary, Secondary Alpha-Helix/Beta-Sheet, Tertiary, Quaternary, Denaturation)"
        ]
      },
      {
        id: "biochem-2",
        title: "2. Enzymes",
        items: [
          "Enzyme Thermodynamics (Delta G/H unchanged, Lower Ea) & Enzyme Classes (Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases)",
          "Enzyme Kinetics: Michaelis-Menten (Vmax, Km, Cooperativity) & Lineweaver-Burk Plots",
          "Enzyme Mechanisms (Lock & Key vs. Induced Fit), Cofactors/Coenzymes, & Local Environmental Effects",
          "Enzyme Regulation: Feedback Inhibition, Reversible Inhibition (Competitive, Uncompetitive, Noncompetitive, Mixed), & Allosteric/Covalent Regulation"
        ]
      },
      {
        id: "biochem-3",
        title: "3. Nonenzymatic Protein Function & Analysis",
        items: [
          "Structural, Motor, Binding, Cell Adhesion Molecules (Cadherins, Integrins, Selectins), & Immunoglobulins",
          "Biosignaling: Ion Channels, Enzyme-Linked Receptors, & GPCRs (cAMP Cascade)",
          "Protein Isolation & Analysis: Electrophoresis (Native/SDS-PAGE, Isoelectric Focusing), Chromatography, & Beer-Lambert Law"
        ]
      },
      {
        id: "biochem-4",
        title: "4. Carbohydrate Structure & Function",
        items: [
          "Monosaccharide Classification, D/L Configuration, Epimers, Anomers, Cyclization (Haworth Projections), & Mutarotation",
          "Monosaccharide Reactions & Disaccharides/Polysaccharides (Maltose, Lactose, Sucrose, Cellulose, Starch, Glycogen)"
        ]
      },
      {
        id: "biochem-5",
        title: "5. Lipid Structure & Function",
        items: [
          "Structural Lipids: Phospholipids, Glycerophospholipids, Sphingolipids, Glycolipids, & Waxes",
          "Signaling Lipids (Terpenes, Steroids, Prostaglandins, Fat-Soluble Vitamins A, D, E, K) & Energy Storage (Triacylglycerols, Saponification)"
        ]
      },
      {
        id: "biochem-6",
        title: "6. DNA & Biotechnology",
        items: [
          "Nucleic Acid Structure (Nucleosides vs. Nucleotides, Purines vs. Pyrimidines, Chargaff's Rules, B-DNA vs. Z-DNA)",
          "DNA Replication Enzymes & Eukaryotic Chromosome Organization (Histones, Heterochromatin vs. Euchromatin, Telomeres, Centromeres)",
          "DNA Repair (Proofreading, Mismatch Repair, Nucleotide Excision Repair, Base Excision Repair) & Oncogenes/Tumor Suppressors",
          "Biotechnology: Recombinant DNA, Plasmids, Hybridization, PCR, & Gel Electrophoresis"
        ]
      },
      {
        id: "biochem-7",
        title: "7. RNA & The Genetic Code",
        items: [
          "Central Dogma, Degenerate Code, Start/Stop Codons, Wobble, & Point/Frameshift Mutations",
          "Transcription (RNA Pol II, TATA Box) & Post-Transcriptional Modification (Splicing, 5' Cap, Poly-A Tail)",
          "Translation (Ribosomes, tRNA, A/P/E sites, Shine-Dalgarno) & Post-Translational Modification (Chaperones)",
          "Gene Expression Control: Prokaryotic Operons (Lac Inducible vs. Trp Repressible) & Eukaryotic Chromatin Modification (Histone Acetylation vs. DNA Methylation)"
        ]
      },
      {
        id: "biochem-8",
        title: "8. Biological Membranes",
        items: [
          "Fluid Mosaic Model, Membrane Components (Cholesterol, Proteins), & Cell Junctions (Gap, Tight, Desmosomes, Hemidesmosomes)",
          "Membrane Transport: Passive (Simple, Osmosis, Facilitated), Active (Primary vs. Secondary), Endocytosis/Exocytosis, & Membrane Potential"
        ]
      },
      {
        id: "biochem-9",
        title: "9. Carbohydrate Metabolism I",
        items: [
          "Glucose Transporters (GLUT2 vs. GLUT4) & Glycolysis (Steps, Rate-Limiting PFK-1, Net ATP/NADH Yield)",
          "Pyruvate Dehydrogenase Complex, Glycogenesis, & Glycogenolysis",
          "Gluconeogenesis, Pentose Phosphate Pathway (HMP Shunt, G6PD, NADPH), & Galactose/Fructose Metabolism"
        ]
      },
      {
        id: "biochem-10",
        title: "10. Carbohydrate Metabolism II",
        items: [
          "Acetyl-CoA Formation, Carnitine Shuttle, & Citric Acid (Krebs) Cycle (Substrates, Enzymes, NADH/FADH2/GTP Yield)",
          "Electron Transport Chain (Complexes I-IV), Shuttles (Glycerol-3-P & Malate-Aspartate), & Oxidative Phosphorylation (ATP Synthase, Total ATP Yield)"
        ]
      },
      {
        id: "biochem-11",
        title: "11. Lipid & Amino Acid Metabolism",
        items: [
          "Lipid Digestion (Emulsification, Bile, Micelles, Chylomicrons), Mobilization, Lipoproteins (HDL, LDL, VLDL), & Cholesterol Synthesis (HMG-CoA Reductase)",
          "Fatty Acid Synthesis vs. Beta-Oxidation, Ketogenesis/Ketolysis, & Protein Catabolism (Glucogenic vs. Ketogenic Amino Acids)"
        ]
      },
      {
        id: "biochem-12",
        title: "12. Bioenergetics & Regulation of Metabolism",
        items: [
          "Bioenergetics, Role of ATP, Metabolic States (Postprandial, Postabsorptive, Starvation), & Hormonal/Tissue-Specific Regulation"
        ]
      }
    ]
  },
  {
    id: "psyc",
    subject: "6. Psychology & Sociology",
    topics: [
      {
        id: "psyc-1",
        title: "1. Biology & Behavior",
        items: [
          "Foundational Figures (Broca, Freud, James, Dewey) & Nervous System Organization (CNS vs. PNS, Somatic vs. Autonomic)",
          "Neurotransmitters (ACh, Dopamine, Endorphins, Epi/Norepi, GABA, Glycine, Glutamate, Serotonin) & Endocrine Tie-ins",
          "Brain Organization: Hindbrain, Midbrain, Forebrain (Thalamus, Hypothalamus, Basal Ganglia, Limbic System, Cerebral Cortex Lobes)",
          "Neural Development (Neurulation), Primitive Infant Reflexes (Rooting, Moro, Babinski, Grasping), & Milestones"
        ]
      },
      {
        id: "psyc-2",
        title: "2. Sensation & Perception",
        items: [
          "Thresholds (Absolute, Difference, Weber's Law) & Signal Detection Theory / Response Biases",
          "Vision: Eye Anatomy, Rods vs. Cones, Parallel Processing, & Visual Pathway",
          "Hearing & Balance (Ear Anatomy, Vestibular System, Auditory Pathway), Smell, Taste, & Somatosensation",
          "Object Recognition: Top-Down vs. Bottom-Up Processing & Gestalt Principles"
        ]
      },
      {
        id: "psyc-3",
        title: "3. Learning & Memory",
        items: [
          "Habituation, Dishabituation, Associative Learning, Classical Conditioning, & Observational Learning",
          "Operant Conditioning: Positive/Negative Reinforcement & Punishment, Reinforcement Schedules, Extinction, & Shaping",
          "Memory: Encoding, Storage (Sensory, Working, Long-Term: Explicit vs. Implicit), & Retrieval",
          "Memory Disorders & Interference (Alzheimer's, Korsakoff's Syndrome, Agnosia, Retroactive vs. Proactive Interference)"
        ]
      },
      {
        id: "psyc-4",
        title: "4. Cognition, Consciousness & Language",
        items: [
          "Piaget's Stages of Cognitive Development (Sensorimotor, Preoperational, Concrete Operational, Formal Operational)",
          "Problem Solving, Heuristics (Availability, Representative), Confirmation Bias, & Gardner's Multiple Intelligences",
          "Consciousness, Sleep Stages & Brain Waves (Beta, Alpha, Theta, Delta, REM), Circadian Rhythms, & Sleep Disorders",
          "Consciousness-Altering Drugs (Depressants, Stimulants, Opioids, Hallucinogens) & Mesolimbic Pathway",
          "Language Components, Theories of Language Development, Whorfian Hypothesis, & Brain Areas (Broca's, Wernicke's, Aphasias)"
        ]
      },
      {
        id: "psyc-5",
        title: "5. Motivation, Emotion & Stress",
        items: [
          "Motivation Theories: Instinct, Optimal Arousal, Drive Reduction, Maslow's Hierarchy, Self-Determination, Incentive, Expectancy-Value, Opponent-Process",
          "Decision-Making Biases & Game Theory: House Money Effect, Gambler's Fallacy, & Prisoner's Dilemma",
          "Emotion Components, 7 Universal Emotions, & Theories of Emotion (James-Lange, Cannon-Bard, Schachter-Singer)",
          "Stress Appraisal (Primary vs. Secondary), Distress vs. Eustress, & General Adaptation Syndrome (Alarm, Resistance, Exhaustion)"
        ]
      },
      {
        id: "psyc-6",
        title: "6. Identity & Personality",
        items: [
          "Self-Concept, Identity, Self-Esteem, Self-Efficacy, Learned Helplessness, & Locus of Control (Internal vs. External)",
          "Developmental Stage Theories: Freud (Psychosexual), Erikson (Psychosocial), Kohlberg (Moral), & Vygotsky (ZPD)",
          "Personality Perspectives: Psychoanalytic (Freud Id/Ego/Superego, Jung), Humanistic (Rogers), Trait (Big Five OCEAN), Social Cognitive, & Behaviorist"
        ]
      },
      {
        id: "psyc-7",
        title: "7. Psychological Disorders",
        items: [
          "Schizophrenia, Depressive Disorders, Bipolar Disorders, & Biological Bases of Psych Disorders",
          "Anxiety Disorders, OCD, Body Dysmorphic Disorder, PTSD, Dissociative Disorders, & Somatic Symptom/Illness Anxiety/Conversion Disorders",
          "Personality Disorders: Cluster A (Weird), Cluster B (Wild), & Cluster C (Worried)"
        ]
      },
      {
        id: "psyc-8",
        title: "8. Social Processes, Attitudes & Behavior",
        items: [
          "Group Psychology: Social Facilitation, Deindividuation/Bystander Effect, Social Loafing, Group Polarization, & Groupthink",
          "Culture (Assimilation, Multiculturalism, Subcultures), Attitudes, Elaboration Likelihood Model, & Socialization",
          "Norms (Mores, Folkways, Taboos), Sanctions, Deviance (Differential Association), Conformity, Compliance, & Obedience"
        ]
      },
      {
        id: "psyc-9",
        title: "9. Social Interaction",
        items: [
          "Status (Ascribed, Achieved, Master), Roles (Role Conflict vs. Role Strain), & Group Types (In/Out, Reference, Primary/Secondary)",
          "Organizations, Weber's Ideal Bureaucracy, & Iron Law of Oligarchy",
          "Self-Presentation: Impression Management, Dramaturgical Approach (Front vs. Back Stage), & Verbal/Nonverbal Communication"
        ]
      },
      {
        id: "psyc-10",
        title: "10. Social Thinking",
        items: [
          "Interpersonal Attraction, Aggression, Attachment Styles (Secure, Avoidant, Ambivalent, Disorganized), & Social Support",
          "Animal Behavior & Evolutionary Psychology: Foraging, Mating Systems, Altruism, Inclusive Fitness, & Game Theory",
          "Social Perception & Cognitive Biases (Primacy/Recency, Halo Effect, Just-World Hypothesis, Self-Serving Bias)",
          "Attribution Theory: Dispositional vs. Situational, Fundamental Attribution Error, & Actor-Observer Bias",
          "Stereotypes (Self-Fulfilling Prophecy, Stereotype Threat), Prejudice (Ethnocentrism vs. Cultural Relativism), & Discrimination"
        ]
      },
      {
        id: "psyc-11",
        title: "11. Social Structure & Demographics",
        items: [
          "Sociological Theories: Functionalism (Manifest vs. Latent), Conflict Theory, Symbolic Interactionism, Social Constructionism, Rational Choice, & Feminist Theory",
          "Social Institutions, Four Tenets of Medical Ethics, & Culture (Material vs. Symbolic, Cultural Lag)",
          "Demographics, Fertility/Mortality, Demographic Transition Model, Social Movements, Globalization, & Urbanization"
        ]
      },
      {
        id: "psyc-12",
        title: "12. Social Stratification",
        items: [
          "Social Class, Socioeconomic Status, Power, Prestige, Anomie, Strain Theory, Meritocracy, & Social Mobility",
          "Poverty (Absolute vs. Relative), Relative Deprivation, Social Reproduction, Social Exclusion, & Spatial Inequality",
          "Epidemiology & Healthcare Disparities: Incidence vs. Prevalence, Morbidity/Mortality, ACA, & Medicare vs. Medicaid"
        ]
      }
    ]
  }
];
