import { useEffect, useState } from "react";
import Header from "../components/HeaderMAIT";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import CampusLife from "../components/CampusLife";
import NewsGrid from "../components/NewsGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import CTAButtons from "../components/CTAButtons";
import FeesModal from "../components/FeesModal";
import LeadForm from "../components/LeadForm";
import { getFees, getOverview } from "../services/api";

export default function University1Page() {
  const [fees, setFees] = useState(null);
  const [overview, setOverview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getOverview()
      .then(setOverview)
      .catch(() => {});
  }, []);

  const openModal = async () => {
    setModalOpen(true);
    const data = await getFees();
    setFees(data);
  };

  return (
    <>
      <Header openModal={openModal} />
      <main>
        <Hero
          onExplore={() =>
            document
              .getElementById("programs")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold">
                  {overview?.data?.university ||
                    "Maharaja Agrasen Institute Of Technology, Delhi"}
                </h2>
                <p className="text-gray-600">{overview?.data?.location}</p>
              </div>
            </div>
          </div>
        </div>

        <Stats />
        <Programs />
        <CampusLife />
        <NewsGrid />
        <CTASection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
