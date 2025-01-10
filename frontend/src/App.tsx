import React, { useState } from "react";
import { Loader2 } from "lucide-react";

function App() {
  const preferences = [
    {
      title: "Temperature Preference",
      name: "temperature",
      options: ["Cold (AC most of the time)", "Moderate (AC sometimes)", "Warm (No AC)"],
    },
    {
      title: "Sleeping Schedule",
      name: "sleepingSchedule",
      options: ["Early Bird (Before 10PM)", "Normal (10PM-12AM)", "Night Owl (After 12AM)"],
    },
    {
      title: "Wake-up Time",
      name: "wakeUpTime",
      options: ["Early (Before 6AM)", "Regular (6-8AM)", "Late (After 8AM)"],
    },
    {
      title: "Noise Level",
      name: "noiseLevel",
      options: ["Silent", "Low conversation", "Music/TV okay"],
    },
    {
      title: "Social Preference",
      name: "socialPreference",
      options: ["Very Social", "Moderately Social", "Mostly Private"],
    },
    {
      title: "Bed Preference",
      name: "BedPreference",
      options: ["2", "3", "4","6"],
    },
    {
      title: "Block Preference",
      name: "BlockPreference",
      options: ["A", "B", "C","D","E","F","G","H"],
    },
    
  ];

  const [formData, setFormData] = useState({
    registrationNumber: "",
    temperature: "",
    sleepingSchedule: "",
    wakeUpTime: "",
    noiseLevel: "",
    socialPreference: "",
    BedPreference: "",
    BlockPreference: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionSelect = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Preference Selector</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Registration Number Input */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Registration Number</h2>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              placeholder="Enter your registration number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          {/* Preferences as Buttons */}
          {preferences.map((pref) => (
            <div key={pref.name} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">{pref.title}</h2>
              <div className="flex gap-4 flex-wrap">
                {pref.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleOptionSelect(pref.name, option)}
                    className={`px-4 py-2 rounded-lg border ${
                      formData[pref.name] === option
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    } hover:bg-indigo-500 hover:text-white transition`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.registrationNumber ||
                Object.values(formData).some((value, key) => key !== "registrationNumber" && !value)
              }
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
