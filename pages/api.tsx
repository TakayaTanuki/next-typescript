import type { NextPage } from "next";
import { useEffect, useState } from "react";
// import useSWR from "swr";

export default function API() {
  const url = "/api/info";
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //   });

  const FetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <div border="1">
      <title>自己紹介タイトル</title>
      <meta name="description" content="自己紹介概要" />
      {console.log(data)}
      <table>
        <tbody>
          {data.map((value, key) => (
            <tr key={key}>
              <td>{value?.name}</td>
              <td>{value?.address}</td>
              <td>{value?.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>自己紹介タイトル</h1>
      <button onClick={FetchData}>fetch</button>
    </div>
  );
}