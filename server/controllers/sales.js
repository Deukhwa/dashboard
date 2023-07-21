import OverallStat from '../models/OverallStat.js';

export const getSales = async (req, res) => {
  try {
    const data = await OverallStat.find();
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
