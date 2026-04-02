import react from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import NewsItems from "./components/NewsItems";
import Nav from "./components/nav";


export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <NewsList />
      <NewsItems />
    </>
  );
}
    