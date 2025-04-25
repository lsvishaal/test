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
- **Profile photo, clinic, and all available doctor info shown**
- **Infinite scroll for doctor cards (7 at a time, loads more as you scroll)**
- **Skeleton loader for doctor cards while loading**

---

## Features
- 🔍 **Autocomplete search** with top 3 suggestions
- 🧑‍⚕️ **Doctor list** with all required info and testids
- 🎨 **Premium gold/white/gray theme** with modern fonts
- 🏷️ **Animated doctor cards and UI** (motion/react)
- 🖼️ **Profile photo, clinic, and all available doctor info**
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
   Visit the local URL shown in your terminal (http://localhost:5173/)

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


