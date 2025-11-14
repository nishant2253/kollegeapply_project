import { useEffect, useState } from "react";
import HeaderVJTI from "../components/HeaderVJTI";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import CampusLife from "../components/CampusLife";
import NewsGrid from "../components/NewsGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FeesModal from "../components/FeesModal";
import LeadForm from "../components/LeadForm";
import { getFees, getOverview } from "../services/api";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function VJTIPage() {
  const [fees, setFees] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [overview, setOverview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getOverview().then(setOverview);
  }, []);

  const openModal = async () => {
    setModalOpen(true);
    const data = await getFees();
    setFees(data);
  };

  return (
    <>
      <HeaderVJTI openModal={openModal} />

      <main className="pt-20 bg-[#f8f6f4]">
        {/* NEW HERO — Image LEFT, Text RIGHT */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {/* IMAGE LEFT */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden h-[350px]"
            >
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000"
                className="w-full h-full object-cover"
                alt="VJTI Campus"
              />
            </motion.div>

            {/* TEXT RIGHT */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-5xl font-bold text-[#800000] leading-tight">
                Excellence in
                <br />
                Engineering
              </h1>

              <p className="mt-4 text-gray-700 text-lg">
                VJTI Mumbai is one of India’s oldest engineering institutes with
                a legacy of innovation, research, and technical education.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#programs"
                  className="px-6 py-3 bg-[#800000] text-white rounded-full hover:bg-[#a00000] transition"
                >
                  Explore Branches
                </a>

                <button
                  onClick={openModal}
                  className="px-6 py-3 bg-[#F5C518] text-black rounded-full hover:bg-[#ffdf53] transition"
                >
                  Check Fees
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DIFFERENT SECTION ORDER FOR UNIQUENESS */}
        <Stats />
        <CampusLife />
        <Programs />

        <NewsGrid />
        <CTASection />

        <div className="max-w-7xl mx-auto px-4">
          <LeadForm />
        </div>
      </main>

      <FeesModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        fees={fees}
      />
      <Footer />
    </>
  );
}
