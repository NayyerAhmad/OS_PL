import React from 'react';
import BarChart from '../components/BarChart';

const Home = () => {
  
  const data = [8, 5, 10]; // Update data array with new values
  const labels = ['Eligibility', 'Programming Languages', 'Operating Systems']; // Update labels array with new labels

  return (
    <div>
      <h1>My Bar Chart</h1>
      <BarChart data={data} labels={labels} />
    </div>
  );
};

export default Home;
