# Verification

Revised 22 October 2026 using the ChatGPT in-app browser.

- ESLint, TypeScript and the production build pass.
- Phone layouts inspected at 320 × 740 and 390 × 844; desktop at 1280 × 800.
- No horizontal document overflow at the inspected widths.
- Authentic logo is transparent against the sage header and ivory introduction.
- Opening sequence shows the centered logo before lifting the curtain; the main scene has no central pizza or promotional headings.
- Price text uses the separate self-hosted Noto Sans Arabic Medium face, confirmed in computed styles.
- Ticker baseline measured at about 32 px/s; after scrolling, about 61 px/s in the sampled interval. Pause holds its transform unchanged and resume restarts movement.
- Persian search for میگو returns three corresponding entries.
- The meat-free filter returns 31 entries. Category shortcuts clear filters and restore the complete menu.
- Switching to English updates the page language, direction, labels and dish content.
- Original menu sheet loads, closes with Escape and restores focus to its trigger.
- Category selection positions the panel below the sticky mobile index.
- Reduced-motion fallbacks were inspected in source; the user's OS preference was not changed.

This is a local prototype. No public site has been published. Menu price units remain as printed. Photograph sources are recorded in design-direction.md.

## Latest revision

- All 129 entries across 11 categories are present without selecting a category. The former hardcoded total of 139 was corrected.
- Desktop Café shortcut lands at approximately 35 px and focuses its section; mobile Pasta shortcut lands at approximately 90 px below the category bar.
- Navigating after a three-result search restores all 129 entries and focuses the requested section.
- Focused search input reports no outline; a parent underline supplies the focus cue.
- Desktop preview width is 160 px, with placement outside the index labels.
- Persian ticker uses «صبحانه، قهوه و غذا»; the main headline reads “Bagro Bistro”.

## Mobile category-follow revision

- Manual scrolling into later categories keeps the active link fully inside the horizontal index: dessert in Persian (RTL) and pasta in English (LTR) were checked in the in-app browser at 390 × 844.
- All 129 entries remain in the document.
- Main headline reads “Bagro Bistro” in both languages.
