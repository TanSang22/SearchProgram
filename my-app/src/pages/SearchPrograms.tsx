import React, { useEffect } from "react";

type CategoryItem = {
  id: number;
  label: string;
  count: number | null;
  value: string;
};

declare global {
  interface Window {
    $?: ((selector: string) => {
      data: (key: string) => unknown;
      select2: (action?: string) => unknown;
    }) | undefined;
    initCategorySelect?: (categoryData: CategoryItem[]) => void;
  }
}

const SearchPrograms = () => {
  const categoryData = [
      {
        id: 1,
        label: "Category",
        count: null,
        value: "",
      },
      {
        id: 2,
        label: "Business",
        count: 121,
        value: "Business",
      },
      {
        id: 3,
        label: "CS & AI",
        count: 80,
        value: "CS & AI",
      },
      {
        id: 4,
        label: "College Courses",
        count: 26,
        value: "College Courses",
      },
      {
        id: 5,
        label: "Competitions / Enrichment",
        count: 62,
        value: "Competitions / Enrichment",
      },
      {
        id: 6,
        label: "Engineering",
        count: 129,
        value: "Engineering",
      },
      {
        id: 7,
        label: "Environmental Science",
        count: 32,
        value: "Environmental Science",
      },
      {
        id: 8,
        label: "Humanities",
        count: 13,
        value: "Humanities",
      },
      {
        id: 9,
        label: "Internships / Mentorships",
        count: 78,
        value: "Internships / Mentorships",
      },
      {
        id: 10,
        label: "Law / Policy / Government",
        count: 59,
        value: "Law / Policy / Government",
      },
      {
        id: 11,
        label: "Leadership",
        count: 61,
        value: "Leadership",
      },
      {
        id: 12,
        label: "Medicine & Health",
        count: 136,
        value: "Medicine & Health",
      },
      {
        id: 13,
        label: "Multi-Topic Program",
        count: 199,
        value: "Multi-Topic Program",
      },
      {
        id: 14,
        label: "Other / General Enrichment",
        count: 182,
        value: "Other / General Enrichment",
      },
      {
        id: 15,
        label: "Research Programs",
        count: 61,
        value: "Research Programs",
      },
      {
        id: 16,
        label: "STEAM",
        count: 3,
        value: "STEAM",
      },
      {
        id: 17,
        label: "STEM",
        count: 434,
        value: "STEM",
      },
      {
        id: 18,
        label: "Social Science",
        count: 33,
        value: "Social Science",
      },
      {
        id: 19,
        label: "Visual & Performing Arts",
        count: 212,
        value: "Visual & Performing Arts",
      },
      {
        id: 20,
        label: "Volunteer",
        count: 32,
        value: "Volunteer",
      },
      {
        id: 21,
        label: "Writing & Communications",
        count: 82,
        value: "Writing & Communications",
      },
  ];

  const locations = [
    "Locations",
    "California",
    "New York",
    "Massachusetts",
    "Texas",
    "Washington",
    "International",
    "Virtual",
  ];

  const deliveryModes = [
    "Program Delivery",
    "Hybrid",
    "In-Person",
    "Online",
    "On-Campus",
    "Online and/or In-Person",
  ];

  const costRanges = ["Cost Range", "Free", "Under $5K", "$5K-$10K", "$10K+"];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/search-programs.js";
    script.async = true;

    script.onload = () => {
      if (window.$ && window.initCategorySelect) {
        window.initCategorySelect(categoryData);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (window.$ && window.$("#filter-category").data("select2")) {
        window.$("#filter-category").select2("destroy");
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main id="main-content" className="main-content">
      <section id="hero" className="hero">
        <div className="section-hero">
          <h1 className="hero-title">
            Find Your Perfect Summer Program - 2,000+ Verified Opportunities
          </h1>
          <p className="hero-desc">
            Research, STEM, arts, leadership, pre-med and more - at top
            universities worldwide
          </p>
          <a
            id="btn_hero-sign_up"
            className="hero-button"
            href="https://portal.gradmap.com/#/public/register"
          >
            <span className="btn-sign-up">
              Start Free - See All 2,000+ Programs
            </span>
          </a>
        </div>
      </section>

      <section id="sp" className="seperate">
        <div className="sp-desc">
          <span>2,000+ Verified Programs</span>
          <span className="divider-dot">.</span>
          <span>Built by College Counselors with 21+ Years Experience</span>
          <span className="divider-dot">.</span>
          <span>Free to Browse and Save Programs</span>
          <span className="divider-dot">.</span>
          <span>No Credit Card Required</span>
        </div>
      </section>

      <section id="search">
        <div id="search-section" className="search-box">
          <div className="search-input-box">
            <span className="search-icon">🔍</span>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Search by subject..."
              className="search-input"
            />
            <ul id="autoComplete_list" className="autocomplete-search" />
          </div>

          <div id="filters" className="filters-wrap">
            <div className="search-filter-row">
              <div className="col">
                <select
                  title="Category"
                  id="filter-category"
                  name="category"
                  className="dropdown-box"
                >
                  <option value="">Category</option>
                  {categoryData.slice(1).map((category) => (
                    <option key={category.id} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col">
                <select
                  title="Location"
                  id="filter-location"
                  name="location"
                  className="dropdown-box"
                >
                  {locations.map((location) => (
                    <option
                      key={location}
                      value={location === "Locations" ? "" : location}
                    >
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col">
                <select
                  title="Program Delivery"
                  id="filter-program-delivery"
                  name="program_delivery"
                  className="dropdown-box"
                >
                  {deliveryModes.map((mode) => (
                    <option
                      key={mode}
                      value={mode === "Program Delivery" ? "" : mode}
                    >
                      {mode}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col">
                <select
                  title="Cost Range"
                  id="filter-cost-range"
                  name="cost_range"
                  className="dropdown-box"
                >
                  {costRanges.map((range) => (
                    <option
                      key={range}
                      value={range === "Cost Range" ? "" : range}
                    >
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="clear-box">
              <button
                id="btn-clear-filter"
                style={{ display: ""}}
                className="btn-clear-filter"
                type="button"
              >
                <span>Clear Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div id="search-result" className="search-result-empty">
          <p className="empty-title">
            No programs found matching your criteria.
          </p>
        </div>

        <div id="pagging-section" className="pagination-wrap">
          <button type="button" className="page-control">
            ← Previous
          </button>
          <span className="page-status">Page 1 of 105</span>
          <button type="button" className="page-control">
            Next →
          </button>
        </div>

        <div id="more-result" className="more-result">
          <h2>Sign up free to see all results</h2>
          <p>
            Create a free account in under a minute to browse every program,
            save favorites, and track applications.
          </p>
          <a className="cta-button" href="">
            Create My Free Account
          </a>
        </div>
      </section>
    </main>
  );
};

export default SearchPrograms;
