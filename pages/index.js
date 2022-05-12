import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  console.log(process.env.API_ENDPOINT);
  const { data } = await axios.get(`${process.env.API_ENDPOINT}api/users`);
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
