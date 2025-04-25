import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import Sidebar from "./components/Sidebar";
import DoctorList from "./components/DoctorList";

const SPECIALTIES = [
  "General Physician",
  "Dentist",
  "Dermatologist",
  "Paediatrician",
  "Gynaecologist",
  "ENT",
  "Diabetologist",
  "Cardiologist",
  "Physiotherapist",
  "Endocrinologist",
  "Orthopaedic",
  "Ophthalmologist",
  "Gastroenterologist",
  "Pulmonologist",
  "Psychiatrist",
  "Urologist",
  "Dietitian/Nutritionist",
  "Psychologist",
  "Sexologist",
  "Nephrologist",
  "Neurologist",
  "Oncologist",
  "Ayurveda",
  "Homeopath",
];

function App() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [consultationType, setConsultationType] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch doctor data");
        return res.json();
      })
      .then((data) => {
        setDoctors(data || []);
        setFilteredDoctors(data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load doctor data. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Sync state to URL query params
  const syncToQueryParams = useCallback((params) => {
    const url = new URL(window.location);
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        url.searchParams.set(key, value.join(","));
      } else if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });
    window.history.pushState({}, "", url);
  }, []);

  // Update query params on filter/search/sort change
  useEffect(() => {
    syncToQueryParams({
      search,
      consultationType,
      specialties: selectedSpecialties,
      sortBy,
    });
  }, [
    search,
    consultationType,
    selectedSpecialties,
    sortBy,
    syncToQueryParams,
  ]);

  // On mount, read query params and set state
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQ = params.get("search") || "";
    const consultationTypeQ = params.get("consultationType") || "";
    const specialtiesQ = params.get("specialties") || "";
    const sortByQ = params.get("sortBy") || "";
    setSearch(searchQ);
    setInputValue(searchQ);
    setConsultationType(consultationTypeQ);
    setSelectedSpecialties(specialtiesQ ? specialtiesQ.split(",") : []);
    setSortBy(sortByQ);
  }, []);

  // Listen for popstate (browser navigation)
  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      setSearch(params.get("search") || "");
      setInputValue(params.get("search") || "");
      setConsultationType(params.get("consultationType") || "");
      setSelectedSpecialties(
        params.get("specialties") ? params.get("specialties").split(",") : []
      );
      setSortBy(params.get("sortBy") || "");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Filtering and sorting logic
  useEffect(() => {
    let filtered = [...doctors];
    // 1. Consultation type filter
    if (consultationType) {
      if (consultationType === "Video Consult") {
        filtered = filtered.filter((doc) => doc.video_consult);
      } else if (consultationType === "In Clinic") {
        filtered = filtered.filter((doc) => doc.in_clinic);
      }
    }
    // 2. Specialties filter
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(
        (doc) =>
          Array.isArray(doc.specialities) &&
          doc.specialities.some((s) => selectedSpecialties.includes(s.name))
      );
    }
    // 3. Search filter
    if (search) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    // 4. Sort
    if (sortBy === "fees") {
      filtered = filtered.sort((a, b) => {
        const feeA = parseInt((a.fees || "").replace(/[^\d]/g, ""), 10) || 0;
        const feeB = parseInt((b.fees || "").replace(/[^\d]/g, ""), 10) || 0;
        return feeA - feeB;
      });
    } else if (sortBy === "experience") {
      filtered = filtered.sort((a, b) => {
        const expA =
          parseInt((a.experience || "").replace(/[^\d]/g, ""), 10) || 0;
        const expB =
          parseInt((b.experience || "").replace(/[^\d]/g, ""), 10) || 0;
        return expB - expA;
      });
    }
    setFilteredDoctors(filtered);
  }, [doctors, consultationType, selectedSpecialties, search, sortBy]);

  useEffect(() => {
    if (inputValue) {
      setSuggestions(
        doctors
          .filter((doc) =>
            doc.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .slice(0, 3)
          .map((doc) => doc.name)
      );
    } else {
      setSuggestions([]);
    }
  }, [inputValue, doctors]);

  const handleSearchEnter = () => {
    setSearch(inputValue);
  };

  const handleSuggestionClick = (name) => {
    setInputValue(name);
    setSearch(name);
    setSuggestions([]);
    inputRef.current?.blur();
  };

  const handleSpecialtyChange = (spec) => {
    setSelectedSpecialties((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
    );
  };

  const handleClearFilters = () => {
    setConsultationType("");
    setSelectedSpecialties([]);
    setSortBy("");
    setSearch("");
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        search={inputValue}
        setSearch={setInputValue}
        onSearchEnter={handleSearchEnter}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
        inputRef={inputRef}
      />
      <MainLayout
        sidebar={
          <Sidebar
            sortBy={sortBy}
            onSortChange={setSortBy}
            consultationType={consultationType}
            onConsultationTypeChange={setConsultationType}
            specialties={SPECIALTIES}
            selectedSpecialties={selectedSpecialties}
            onSpecialtyChange={handleSpecialtyChange}
            onClearFilters={handleClearFilters}
          />
        }
      >
        {loading ? (
          <div className="flex justify-center py-8">
            <span
              className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-2"
              aria-label="Loading"
            ></span>
            <span>Loading...</span>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-8" role="alert">
            {error}
          </div>
        ) : (
          <DoctorList
            key={
              consultationType + selectedSpecialties.join(",") + sortBy + search
            }
            doctors={filteredDoctors}
          />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
