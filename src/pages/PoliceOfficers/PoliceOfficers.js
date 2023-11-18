import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { supabase } from '../../Config/SupaBaseClient';
import './PoliceOfficers.css';

function PoliceOfficers() {
  const [policeOfficers, setPoliceOfficers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('policeOfficers')
          .select('*');

        if (error) {
          console.error('Error fetching data:', error.message);
        } else {
          setPoliceOfficers(data || []);
        }
      } catch (error) {
        console.error('An unexpected error occurred:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="poftable-container">
        <h1 className='pohead'>Police Officers Details</h1>

        {policeOfficers.length ? (
          <table className='poftable'>
            <thead>
              <tr>
                <th className='poth'>Name</th>
                <th className='poth'>Age</th>
                <th className='poth'>Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {policeOfficers.map((officer) => (
                <tr key={officer.id}>
                  <td className='potd'>{officer.officer_name}</td>
                  <td className='potd'>{officer.id}</td>
                  <td className='potd'>{officer.contact_no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="spinner pofload">
          <span>Loading...</span>
          <div className="half-spinner"></div>
        </div>
        )}
      </div>
    </div>
  );
}

export default PoliceOfficers;
