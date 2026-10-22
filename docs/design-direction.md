# Bagro menu design direction

Research completed 22 October 2026 using the ChatGPT in-app browser.

## Evidence and visual decisions

Bagro's live website is an image-based menu. Its cover and menu sheets use a muted sage/khaki field, gray wordmark, off-white foliage, and occasional muted red markers. Google Maps photographs show warm ivory plaster, large plants, gray chairs, woven lamps, walnut tables, and softly lit arches. The interface extends that existing material palette.

Bloosh uses oversized sans-serif typography, one dominant object in the hero, a moving text strip, spacious product rows, pointer-following image previews, and smooth overlay navigation. This design translates those behaviors into category browsing. It uses native scrolling, touch controls, and reduced-motion fallbacks.

## Tokens

- Menu sage: #c9c3ae, sampled from a background pixel in Bagro's menu cover.
- Deep olive: #303b30, derived from the plants and dark interior details.
- Warm ivory: #f6f4ec, derived from the restaurant's walls.
- Soft gray: #737572, derived from the wordmark and upholstery.
- Walnut: #806c55, derived from the tables.
- Muted red: #a64237, reserved for source-marked new dishes and spicy indicators.

Manrope carries the Latin display typography; Vazirmatn carries readable Persian text. Persian is the default language, with an English switch. The layout is RTL for Persian, with isolated Latin headings and numbers. Noto Sans Arabic Medium supplies a distinct, readable price face. Broad type, small rectangular photographs, and a scroll-responsive text band provide the expressive elements. Dividers organize the menu; there is no repeated card grid.

## Layout

```text
Mobile                           Desktop
centered logo / curtain reveal   centered logo / curtain reveal
logo / language / navigation      logo / navigation / language
English brand headline / interior     interior / English brand headline
scroll-responsive text band       scroll-responsive text band
Menu / search / meat-free         Menu / search / meat-free
sticky horizontal category index  sticky vertical category index
all categories / dish rows     all categories / dish rows
interior / location               interior / location
address / phone / map             address / phone / map
```

The opening contains factual brand and location copy, with no centered food image or promotional slogans. The 2.6-second introduction presents the authentic Bagro logo on warm ivory, then lifts the overlay to reveal the page. The text band advances at 32 px/s and smoothly accelerates from scroll velocity, with a pause control. Reduced-motion preferences remove the introduction and stop automatic movement.

The dark olive menu uses a category index and all 11 categories in one continuous list. Fine dividers, restrained metadata, large Latin category titles, and a small image establish hierarchy without cards or pill controls. Search and dietary filtering expose grouped matching entries.

The palette follows the restaurant. The reference's pointer preview is retained, but never required for accessing menu information. The mobile menu gives direct access to every category without animation delays.

## Source records

- Menu and logo: https://bagrobistro.com/ and its original public menu image files, retained under public/menu/.
- Motion and composition reference: https://www.blooshstudio.com/.
- Business address, phone, and photographs: https://www.google.com/maps/search/?api=1&query=Bagro+Bistro+Shiraz.
- Interior photograph: adel heidari, Google Maps, August 2026.
- Spaghetti photograph: Alireza Vahedi, Google Maps, March 2025.
- Pizza photograph: morteza mazloumi, Google Maps, June 2026.

Public visitor photographs are used for this local design prototype and credited in the interface. Confirm restaurant permission or replace them with owned photography before public release.

Menu prices are transcribed as printed, without conversion or an invented currency unit. Missing prices and source values of zero are displayed as requiring confirmation, never as free. Vegetarian filters only include dishes whose listed ingredients clearly support that classification; these are not allergy assurances. No ratings, testimonials, live availability, or unverified opening hours are added.

## Continuous menu revision

All 129 source entries render in the document by default, with semantic dish lists and section headings. The count is calculated from the data. Category links are optional shortcuts; they move focus to the section and track its position during scrolling. Search and dietary filters narrow the list explicitly. Desktop hover previews are 160 × 190 px and sit beside the category index. Search uses an underline focus cue without an outline ring.

No official slogan was confirmed from Bagro’s published site. The Persian ticker uses the factual phrase «صبحانه، قهوه و غذا»; this is interface copy, not an attributed brand slogan.

## Mobile category following

The main headline reads “Bagro Bistro” in both interface languages. The horizontal mobile index automatically reveals the active category while the user scrolls through dishes. Only the index scrolls horizontally; page position and focus remain unchanged. It supports RTL and LTR layouts, handles resizing, and respects reduced-motion preferences.
