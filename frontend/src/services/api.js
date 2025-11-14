export const API_BASE = "https://landing-pages-backend-rqqo.onrender.com/api";

export const getFees = async () => {
  const res = await fetch(`${API_BASE}/fees`);
  return res.json();
};

export const getOverview = async () => {
  const res = await fetch(`${API_BASE}/overview`);
  return res.json();
};
