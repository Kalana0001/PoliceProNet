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
                <th className='poth'>Designation</th>
                <th className='poth'>Batch No</th>
                <th className='poth'>Department</th>
                <th className='poth'>Age</th>
                <th className='poth'>Address</th>
                <th className='poth'>Contact No</th>
                <th className='poth'>Email</th>
                <th className='poth'>Station</th>
              </tr>
            </thead>
            <tbody>
              {policeOfficers.map((officer) => (
                <tr key={officer.id}>
                  <td className='potd'>{officer.name}</td>
                  <td className='potd'>{officer.designation}</td>
                  <td className='potd'>{officer.batch_no}</td>
                  <td className='potd'>{officer.department}</td>
                  <td className='potd'>{officer.age}</td>
                  <td className='potd'>{officer.address}</td>
                  <td className='potd'>{officer.contact_no}</td>
                  <td className='potd'>{officer.email}</td>
                  <td className='potd'>{officer.station}</td>
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
