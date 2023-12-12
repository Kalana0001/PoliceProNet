import NavBar from '../../components/NavBar/NavBar';
import { supabase } from '../../Config/SupaBaseClient';
import { useEffect,useState } from 'react';

function PoliceStations() {

  const [policeOfficers, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('policeOfficers')
          .select('*');

        if (error) {
          console.error('Error fetching data:', error.message);
        } else {
          setProfiles(data || []);
        }
      } catch (error) {
        console.error('An unexpected error occurred:', error.message);
      }
    };

    fetchData();
  }, []);

    return (
      <div>
        <NavBar/>
      <div className="poftable-container">
        <h1 className='pohead'>Police Officers Details</h1>
        
      <table className='poftable'>
        <thead>
          <tr>
            <th className='poth'>Name</th>
            <th className='poth'>Location</th>
          </tr>
        </thead>
        <tbody>
          {policeOfficers.map((police) => (
            <tr key={police.id}>
            <td className='potd'>{police.department}</td>
            <td className='potd'>{police.station}</td>
          </tr>
          ))}      
        </tbody>
      </table>
    </div>
    </div>
    );
  }
  
  export default PoliceStations;