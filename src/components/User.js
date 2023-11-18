import { useEffect, useState } from "react";
import { supabase } from "../Config/SupaBaseClient";

const User = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
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
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h2>{profile.username}</h2>
          <p>ID: {profile.id}</p>
          {/* Add more paragraphs for other fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default User;
