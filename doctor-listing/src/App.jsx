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

const PAGE_SIZE = 7;

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
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lazyLoading, setLazyLoading] = useState(false);
  const observer = useRef();

  const lastCardRef = useCallback(
    (node) => {
      if (loading || lazyLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new window.IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < filteredDoctors.length
        ) {
          setLazyLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + PAGE_SIZE);
            setLazyLoading(false);
          }, 500);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, lazyLoading, visibleCount, filteredDoctors.length]
  );

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
    setVisibleCount(PAGE_SIZE); // Reset visibleCount immediately after filtering
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

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [doctors, consultationType, selectedSpecialties, search, sortBy]);

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

  const handleLoadMore = () => {
    setLazyLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setLazyLoading(false);
    }, 500); // Simulate network delay
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
          <DoctorList loading visibleCount={PAGE_SIZE} />
        ) : error ? (
          <div className="text-center text-red-600 py-8" role="alert">
            {error}
          </div>
        ) : (
          <DoctorList
            doctors={filteredDoctors}
            visibleCount={visibleCount}
            loading={lazyLoading}
            lastCardRef={lastCardRef}
          />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
