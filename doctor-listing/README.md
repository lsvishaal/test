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

---

## Features
- 🔍 **Autocomplete search** with top 3 suggestions
- 🧑‍⚕️ **Doctor list** with all required info and testids
- 🗂️ **Filter panel:** consultation type, specialties, sort
- 🔗 **URL query params** for all filters/search/sort
- 🔄 **Browser navigation** retains filters
- 🧪 **Ready for automated testing** (data-testid everywhere)
- ♿ **Accessible** (aria-labels, semantic HTML)
- ⏳ **Loading spinner** and error message for API

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
 │    ├── Sidebar
 │    │    ├── SortOptions
 │    │    ├── Filters
 │    │    │    ├── SpecialityFilter
 │    │    │    └── ConsultationModeFilter
 │    │    └── ClearFiltersButton
 │    └── DoctorList
 │         └── DoctorCard (repeated)
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
