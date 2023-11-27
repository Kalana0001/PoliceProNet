import React, { useState, useEffect } from 'react';
import { supabase } from '../../Config/SupaBaseClient';

function PoliceFetch({ userData }) {
  const [licenserData, setLicenserData] = useState([]);

  useEffect(() => {
    const fetchLicenserData = async () => {
      try {
        // Fetch data from the "licenser" table
        const { data, error } = await supabase.from('licenser').select();

        if (error) {
          console.error('Error fetching licenser data:', error.message);
        } else {
          setLicenserData(data || []);
        }
      } catch (error) {
        console.error('Error fetching licenser data:', error.message);
      }
    };

    fetchLicenserData();
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <h2>Licenser Data</h2>
      <ul>
        {licenserData.map((licenser) => (
          <li key={licenser.id}>{licenser.name} - {licenser.email}</li>
          // Adjust the properties based on your licenser table structure
        ))}
      </ul>
    </div>
  );
}

export default PoliceFetch;
