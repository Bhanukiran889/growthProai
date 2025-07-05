import { useState, useEffect, useRef } from "react";
import Loader from "./componets/Loader/Loader";
import Switch from "./componets/Switch/Switch";
// Importing GSAP for animations
import gsap from "gsap";
import "./index.css";

function App() {
  const [form, setForm] = useState({ name: "", location: "" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.theme === "dark") return true;
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return true;
    return false;
  });

  const formRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (data && cardRef.current) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/business-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("API Error:", error);
    }
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    setLoading(true); // loader while regenerating
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/regenerate-headline?name=${form.name}&location=${form.location}`
      );
      const result = await res.json();
      setData((prev) => ({ ...prev, headline: result.headline }));
    } catch (error) {
      console.error("API Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-white p-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-blue-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Local Business Dashboard</h1>
          <div onClick={() => setDarkMode((prev) => !prev)} className="cursor-pointer">
           <Switch darkMode={darkMode} onToggle={() => setDarkMode(prev => !prev)} />
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Business Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g., Cake & Co"
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
            />
          </div>
          <div>
            <label htmlFor="location" className="block mb-1">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="e.g., Mumbai"
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>

        {loading ? (
          <div className="flex justify-center my-4">
            <Loader />
          </div>
        ) : (
          data && (
            <div className="mt-6 p-4 rounded-lg bg-gray-200 dark:bg-gray-700 shadow">
              <p className="text-md">
                <strong>⭐ Rating:</strong> {data.rating}
              </p>
              <p className="text-md">
                <strong>💬 Reviews:</strong> {data.reviews}
              </p>
              <p ref={cardRef} className="italic mt-2">"{data.headline}"</p>
              <button
                onClick={regenerateHeadline}
                className="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition"
              >
                Regenerate SEO Headline
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
