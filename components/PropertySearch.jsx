"use client";

/* ---------------------------------------------------------------------------
   PropertySearch.jsx
   The Realshed-style search widget floating over the hero. Pure demo — there
   is no backend, so submitting just resets the form.
--------------------------------------------------------------------------- */

import { useState } from "react";
import { searchOptions } from "./data";
import { Search } from "./icons";

const tabs = ["Buy", "Rent"];

export default function PropertySearch({ className = "" }) {
  const [tab, setTab] = useState("Buy");
  const [form, setForm] = useState({
    keyword: "",
    type: searchOptions.types[0],
    location: searchOptions.locations[0],
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      keyword: "",
      type: searchOptions.types[0],
      location: searchOptions.locations[0],
    });
  };

  return (
    <div
      className={`rounded-[10px] bg-white p-6 shadow-[0_30px_80px_rgba(18,59,74,0.2)] sm:p-8 ${className}`}
    >
      {/* BUY / RENT tabs */}
      <div className="mb-6 flex gap-2 border-b border-line pb-px" role="tablist" aria-label="Property type">
        {tabs.map((t) => {
          const active = tab === t;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t)}
              className={`relative px-5 pb-3 text-[16px] font-medium transition-colors duration-200 ${
                active ? "text-primary-ink" : "text-muted hover:text-ink"
              }`}
            >
              {t}
              {active && (
                <span className="absolute inset-x-0 bottom-[-1px] h-[3px] rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div>
            <label htmlFor="ps-keyword" className="field-label">
              Keyword
            </label>
            <div className="relative">
              <input
                id="ps-keyword"
                type="text"
                value={form.keyword}
                onChange={update("keyword")}
                placeholder={tab === "Buy" ? "Search your dream home…" : "Search rentals…"}
                className="field pl-11"
              />
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            </div>
          </div>

          <div>
            <label htmlFor="ps-type" className="field-label">
              Property Type
            </label>
            <select
              id="ps-type"
              value={form.type}
              onChange={update("type")}
              className="select-field"
            >
              {searchOptions.types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ps-location" className="field-label">
              Location
            </label>
            <select
              id="ps-location"
              value={form.location}
              onChange={update("location")}
              className="select-field"
            >
              {searchOptions.locations.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button type="submit" className="btn-primary w-full px-6 py-3.5 text-[15px]">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
