export default function Publications() {
  const publications = [
    {
      title: "Gastric bypass alters diurnal feeding behavior and reprograms the hepatic clock to regulate endogenous glucose flux",
      authors: "Yuanchao Ye, Marwa Abu El Haija, ... Mohamad Mokadem",
      journal: "JCI Insight",
      year: "2023",
      doi: "https://insight.jci.org/articles/view/166618",
      abstract: "The molecular clock machinery regulates several homeostatic rhythms, including glucose metabolism. We previously demonstrated that Roux-en-Y gastric bypass (RYGB) has a weight-independent effect on glucose homeostasis and transiently reduces food intake. In this study we investigate the effects of RYGB on diurnal eating behavior as well as on the molecular clock and this clock's requirement for the metabolic effects of this bariatric procedure in obese mice. We find that RYGB reversed the high-fat diet-induced disruption in diurnal eating pattern during the early postsurgery phase of food reduction. Dark-cycle pair-feeding experiments improved glucose tolerance to the level of bypass-operated animals during the physiologic fasting phase (Zeitgeber time 2, ZT2) but not the feeding phase (ZT14). Using a clock gene reporter mouse model (mPer2Luc), we reveal that RYGB induced a liver-specific phase shift in peripheral clock oscillation with no changes to the central clock activity within the suprachiasmatic nucleus. In addition, we show that weight loss effects were attenuated in obese ClockΔ19 mutant mice after RYGB that also failed to improve glucose metabolism after surgery, specifically hepatic glucose production. We conclude that RYGB reprograms the peripheral clock within the liver early after surgery to alter diurnal eating behavior and regulate hepatic glucose flux.",
      keywords: ["Endocrinology","Gluconeogenesis","Glucose metabolism","Metabolism"],
    },
    {
      title: "Endocannabinoid Receptor-1 and Sympathetic Nervous System Mediate the Beneficial Metabolic Effects of Gastric Bypass",
      authors: "Yuanchao Ye, Marwa Abu El Haija, ... Mohamad Mokadem",
      journal: "Cell Reports",
      year: "2020",
      doi: "https://www.cell.com/cell-reports/fulltext/S2211-1247(20)31259-6?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2211124720312596%3Fshowall%3Dtrue",
      abstract: "The exact mechanisms underlying the metabolic effects of bariatric surgery remain unclear. Here, we demonstrate, using a combination of direct and indirect calorimetry, an increase in total resting metabolic rate (RMR) and specifically anaerobic RMR after Roux-en-Y gastric bypass (RYGB), but not sleeve gastrectomy (SG). We also show an RYGB-specific increase in splanchnic sympathetic nerve activity and \"browning\" of visceral mesenteric fat. Consequently, selective splanchnic denervation abolishes all beneficial metabolic outcomes of gastric bypass that involve changes in the endocannabinoid signaling within the small intestine. Furthermore, we demonstrate that administration of rimonabant, an endocannabinoid receptor-1 (CB1) inverse agonist, to obese mice mimics RYGB-specific effects on energy balance and splanchnic nerve activity. On the other hand, arachidonoylethanolamide (AEA), a CB1 agonist, attenuates the weight loss and metabolic signature of this procedure. These findings identify CB1 as a key player in energy regulation post-RYGB via a pathway involving the sympathetic nervous system.",
      keywords: ["Endocannabinoid Receptor-1","Energy Expenditure","Gastric Bypass","Obesity","Resting Metabolic Rate","Sleeve Gastrectomy","Sympathetic Nervous System","Thermogenesis"],
    },
    {
      title: "Targeting Gi/o protein-coupled receptor signaling blocks HER2-induced breast cancer development and enhances HER2-targeted therapy",
      authors: "Cancan Lyu, Yuanchao Ye, ... Songhai Chen",
      journal: "JCI Insight",
      year: "2021",
      doi: "https://insight.jci.org/articles/view/150532",
      abstract: "GPCRs are highly desirable drug targets for human disease. Although GPCR dysfunction drives development and progression of many tumors, including breast cancer (BC), targeting individual GPCRs has limited efficacy as a cancer therapy because numerous GPCRs are activated. Here, we sought a new way of blocking GPCR activation in HER2+ BC by targeting a subgroup of GPCRs that couple to Gi/o proteins (Gi/o-GPCRs). In mammary epithelial cells of transgenic mouse models, and BC cell lines, HER2 hyperactivation altered GPCR expression, particularly, Gi/o-GPCR expression. Gi/o-GPCR stimulation transactivated EGFR and HER2 and activated the PI3K/AKT and Src pathways. If we uncoupled Gi/o-GPCRs from their cognate Gi/o proteins by pertussis toxin (PTx), then BC cell proliferation and migration was inhibited in vitro and HER2-driven tumor formation and metastasis were suppressed in vivo. Moreover, targeting Gi/o-GPCR signaling via PTx, PI3K, or Src inhibitors enhanced HER2-targeted therapy. These results indicate that, in BC cells, HER2 hyperactivation drives aberrant Gi/o-GPCR signaling and Gi/o-GPCR signals converge on the PI3K/AKT and Src signaling pathways to promote cancer progression and resistance to HER2-targeted therapy. Our findings point to a way to pharmacologically deactivate GPCR signaling to block tumor growth and enhance therapeutic efficacy.",
      keywords: ["Breast cancer","G protein–coupled receptors","Oncology","Signal transduction","Therapeutics"],
    },
    // Add more publications as needed
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Publications</h1>

        <div className="space-y-12">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-2">{pub.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {pub.authors}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {pub.journal}, {pub.year}
              </p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Abstract</h3>
                <p className="text-gray-600 dark:text-gray-300">{pub.abstract}</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                View Publication →
              </a>
            </article>
          ))}
        </div>

        {/* More Publications Link */}
        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View More Publications
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 