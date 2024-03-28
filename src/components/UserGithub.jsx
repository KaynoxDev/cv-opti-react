import { useState, useEffect } from "react";

function UserGithub() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/github-john-doe`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data.name);
      })
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <>
        <h1> Github Users</h1>
        <div className="container">
          {data.name}
          <img src={data.avatar_url} alt="un lapin bleu" />
          {data.bio}
          {data.followers}
          {data.following}
          {data.created_at}
          {data.updated_at}
          {data.repos_url}
        </div>
      </>
    );
  }
}

export default UserGithub;
