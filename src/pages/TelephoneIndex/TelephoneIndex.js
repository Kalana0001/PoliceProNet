import NavBar from '../../components/NavBar/NavBar';
import { supabase } from '../../Config/SupaBaseClient';
import { useEffect,useState } from 'react';

function TelephoneIndex() {

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
        <h1 className='pohead'>Telephone Index</h1>
        
      <table className='poftable'>
        <thead>
          <tr>
            <th className='poth'>Name</th>
            <th className='poth'>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {policeOfficers.map((police) => (
            <tr key={police.id}>
            <td className='potd'>{police.name}</td>
            <td className='potd'>{police.contact_no}</td>
          </tr>
          ))}      
        </tbody>
      </table>
    </div>
    </div>
    );
  }
  
  export default TelephoneIndex;