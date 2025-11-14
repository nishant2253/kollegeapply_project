import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function LeadForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      state: e.target.state.value,
      course: e.target.course.value,
      intakeYear: e.target.intakeYear.value,
      consent: e.target.consent.checked,
    };

    setStatus("Submitting...");
    try {
      // replace with Pipedream endpoint in production
      const res = await fetch(
        "https://0d6467150e39323d83774ab9c74c4dad.m.pipedream.net",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (res.ok) setStatus("Submitted Successfully!");
      else setStatus("Error submitting form.");
    } catch {
      setStatus("Network error.");
    }
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <motion.form
      id="leadForm"
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow mt-10 max-w-2xl"
    >
      <h2 className="text-xl font-bold mb-4">Apply Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          name="fullName"
          placeholder="Full Name"
          required
          className="p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="p-2 border rounded"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          maxLength="10"
          required
          className="p-2 border rounded"
        />
        <select name="state" className="p-2 border rounded">
          <option>Maharashtra</option>
          <option>Delhi</option>
        </select>
        <select name="course" className="p-2 border rounded">
          <option>B.Tech</option>
          <option>MBA</option>
        </select>
        <select name="intakeYear" className="p-2 border rounded">
          <option>2025</option>
          <option>2026</option>
        </select>
      </div>

      <label className="block mt-3">
        <input name="consent" type="checkbox" /> I agree to be contacted.
      </label>

      <div className="mt-4 flex items-center gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        <div className="text-sm text-gray-600">{status}</div>
      </div>
    </motion.form>
  );
}
