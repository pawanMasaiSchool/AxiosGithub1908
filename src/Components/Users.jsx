import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Users() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [inp, setInp] = useState("");

  const handleInpChange = (e) => {
    setInp(e.target.value);
    // console.log(e.target.value)
  };
  const handleSearch = async () => {
    if (inp === "") {
      alert("Input cant be empty");
      return;
    }
    await getUsers()
      .then((res) => {
        let arr = res.data.items;
        setIsLoading(false);
        return arr;
      })

      .then((res) => setProfiles(res))
      .catch((err) => alert(err))
      .finally();
  };
  const getUsers = () => {
    setIsLoading(true);
    return axios({
      method: "get",
      //https://api.github.com/search/users?q=pawan
      url: `https://api.github.com/search/users?q=${inp}`
    });
  };
  // console.log(profiles);

  return (
    <div>
      <input value={inp} placeholder="Search Name" onChange={handleInpChange} />
      <br />
      <br />
      <button onClick={handleSearch}>Search</button>
      {isLoading === true ? (
        <h1>...loading</h1>
      ) : (
        profiles.map((item) => {
          return (
            <Card
              key={item.id}
              userId={item.id}
              name={item.login}
              img={item.avatar_url}
            />
          );
        })
      )}
    </div>
  );
}
