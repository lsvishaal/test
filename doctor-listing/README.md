# Vynza – Doctor Listing Page – Campus Assessment

## Overview
A modern, minimal, and fully functional doctor listing page built with React and Vite. Features include:
- Autocomplete search bar (top 3 suggestions)
- Dynamic filter panel (consultation type, specialties, sort)
- Doctor list rendered from API
- All filters/search/sort work in combination
- All logic is client-side after initial API call
- URL query params reflect applied filters/search/sort
- Browser navigation retains filters
- All required `data-testid` attributes for test automation
- Accessibility best practices
- **Premium gold/white/gray theme with modern fonts and motion effects**
- **Animated doctor cards and UI using motion**
- **Sticky/fixed sidebar for sort and filters**
- **Responsive, scrollable, and visually separated filter panel**
- **Profile photo, clinic, and all available doctor info shown**
- **Infinite scroll for doctor cards (7 at a time, loads more as you scroll)**
- **Skeleton loader for doctor cards while loading**

---

## Features
- 🔍 **Autocomplete search** with top 3 suggestions
- 🧑‍⚕️ **Doctor list** with all required info and testids
- 🗂️ **Filter panel:** consultation type, specialties, sort
- 🎨 **Premium gold/white/gray theme** with modern fonts
- 🏷️ **Animated doctor cards and UI** (motion/react)
- 📌 **Sticky/fixed sidebar** for sort and filters
- 🖼️ **Profile photo, clinic, and all available doctor info**
- 🔗 **URL query params** for all filters/search/sort
- 🔄 **Browser navigation** retains filters
- 🧪 **Ready for automated testing** (data-testid everywhere)
- ♿ **Accessible** (aria-labels, semantic HTML)
- ⏳ **Skeleton loader** for doctor cards while loading
- 🔄 **Infinite scroll** for doctor cards (loads more as you scroll)

---

## Setup & Usage

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the dev server:**
   ```sh
   npm run dev
   ```
3. **Open in browser:**
   Visit the local URL shown in your terminal (usually http://localhost:5173/)

---

## Component Structure

```
App
 ├── Navbar (search bar)
 ├── MainLayout
 │    ├── Sidebar (fixed, sticky)
 │    │    ├── SortOptions (in its own box)
 │    │    ├── Filters (in its own box, scrollable)
 │    │    │    ├── SpecialityFilter
 │    │    │    └── ConsultationModeFilter
 │    │    └── ClearFiltersButton (sticky at top of filters)
 │    └── DoctorList (infinite scroll, skeleton loader)
 │         ├── DoctorCard (animated, modern layout)
 │         └── SkeletonDoctorCard (loading fallback)
```

---

## Manual Testing Guide
- Type in the search bar for suggestions (top 3)
- Select a suggestion or press Enter to filter the doctor list
- Use the filter panel to filter by consultation type, specialties, and sort
- All filters/search/sort work together
- URL updates with query params for all filters/search/sort
- Use browser back/forward to see filters persist
- Inspect elements for correct `data-testid` attributes
- **Sidebar remains fixed and accessible while scrolling**
- **Doctor cards animate in/out on filter/search/sort changes**
- **Infinite scroll loads more doctor cards as you scroll**
- **Skeleton loader appears while loading more cards**

---

## Best Practices Followed
- All state and logic managed at the top level (App.jsx)
- All filtering/search/sort is client-side after initial API call
- All interactive/display elements use the exact `data-testid` attributes
- Accessibility: aria-labels, semantic HTML, keyboard navigation
- PropTypes for component prop validation
- JSDoc comments for key functions/components
- Linting and formatting with ESLint/Prettier
- Minimal, modern, and maintainable code structure
- **Consistent, theme-based styling and spacing**
- **Motion effects for a modern, dynamic UI**
- **Performance optimizations: lazy loading, infinite scroll, skeleton loader**

---

## Submission Checklist
- [x] Autocomplete search bar (top 3, testids)
- [x] Consultation type filter (radio, testids)
- [x] Specialties filter (multi, all, testids)
- [x] Sort filter (fees asc, exp desc, testids)
- [x] All filters/search/sort work in combination
- [x] All logic on frontend
- [x] Doctor list/cards (all fields, testids)
- [x] Query params for all filters/search/sort
- [x] Browser navigation retains filters
- [x] All required data-testid attributes
- [x] Accessibility best practices
- [x] Loading and error handling
- [x] **Premium gold/white/gray theme and modern fonts**
- [x] **Animated doctor cards and UI (motion)**
- [x] **Sticky/fixed sidebar and scrollable filters**
- [x] **Profile photo, clinic, and all available doctor info**
- [x] **Infinite scroll and skeleton loader for doctor cards**

---

## API
- API URL: https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json

---

## Extending the Project
- Add more filters or sorting options
- Add responsiveness for mobile
- Add automated tests (see `src/__tests__/App.test.jsx` for a sample)
- Deploy to Vercel/Netlify and add the live link here

---

Happy coding and good luck! 🚀
