/**
 * RunSnip's apps, as a brand: each app's colour, the one its coloured mark is filled with and an app may use wherever
 * it stands for itself (a tab, a launcher tile, a file's badge). The marks themselves are icons of the brand set:
 * DocxBrandIcon draws in the text's colour, DocxBrandColorIcon in Docx's own.
 *
 * Each colour holds white at 3:1 or more (WCAG's contrast for graphics), so the white mark on it reads — on a light
 * page and a dark one, since the tile carries its own ground. The hues are spread round the wheel so no two apps
 * share one; Finder, the files every app keeps, is the one quiet slate.
 */
export const RUNSNIP_APPS = {
  code: { name: "Code", color: "#008774", mark: "CodeBrandIcon" },
  finder: { name: "Finder", color: "#52657D", mark: "FinderBrandIcon" },
  media: { name: "Media", color: "#B52CA1", mark: "MediaBrandIcon" },
  story: { name: "Story", color: "#C94E0C", mark: "StoryBrandIcon" },
  docx: { name: "Docx", color: "#2F6BE8", mark: "DocxBrandIcon" },
  xlsx: { name: "Xlsx", color: "#13915A", mark: "XlsxBrandIcon" },
  pptx: { name: "Pptx", color: "#C26F00", mark: "PptxBrandIcon" },
  pdf: { name: "PDF", color: "#D63A3F", mark: "PdfBrandIcon" },
  forms: { name: "Forms", color: "#7550E0", mark: "FormsBrandIcon" },
  composer: { name: "Composer", color: "#5F7F00", mark: "ComposerBrandIcon" },
  vaudio: { name: "VAudio", color: "#CD2E73", mark: "VAudioBrandIcon" },
  page: { name: "Page", color: "#0080A3", mark: "PageBrandIcon" },
  portfolio: { name: "Portfolio", color: "#8C39BC", mark: "PortfolioBrandIcon" },
  resume: { name: "Resume", color: "#8F6B09", mark: "ResumeBrandIcon" },
} as const;

export type RunSnipApp = keyof typeof RUNSNIP_APPS;

/** The mark on the colour. */
export const ON_BRAND = "#FFFFFF";
