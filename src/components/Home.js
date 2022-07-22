import classes from "./Home.module.css";
import Card from "../UI/Card";
import SkeletonLoader from "./SkeletonLoader";
import { useState, useEffect } from "react";

const USER_NUMBER = 12;

const Home = () => {
  const [count, setCount] = useState({
    number: USER_NUMBER,
  });
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(
      () =>
        (async () => {
          const response = await fetch(
            `https://randomuser.me/api/?results=${count.number}#`
          );
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message || "Could not fetch User Data");
          }
          setUsers((prevValue) => [...prevValue, ...data.results]);

          setIsLoading(false);
        })(),
      1000
    );

    return () => {
      clearTimeout();
    };
  }, [count, setUsers, setIsLoading]);

  const scrollToEnd = () => {
    setCount({
      number: USER_NUMBER,
    });
  };

  window.onscroll = function () {
    let lhs = window.innerHeight + document.documentElement.scrollTop + 2;
    let rhs = document.documentElement.offsetHeight;
    if (lhs >= rhs) {
      scrollToEnd();
    }
  };

  let SkeletonElement = [];
  for (let i = 0; i < 10; i++) {
    SkeletonElement.push(<SkeletonLoader key={i} />);
  }

  return (
    <div className={classes.list}>
      {users.length > 0 &&
        users.map((e, i) => (
          <Card
            key={i}
            picUrl={e.picture.large}
            firstName={e.name.first}
            lastName={e.name.last}
          />
        ))}
      {isLoading && SkeletonElement.map((el) => el)}
    </div>
  );
};

export default Home;
