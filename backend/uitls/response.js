export const success = (res, data) => {
  return res.json({ success: true, data });
};

export const error = (res, message) => {
  return res.status(400).json({ success: false, message });
};
