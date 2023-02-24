import { useState } from "react";
import "./App.css";
import avatarImage from "./assets/avatar.png";
import Header from "./components/Header";
import MailButton from "./components/MailButton";
import Introduce from "./components/Introduce";
import Footer from "./components/Footer";

const introContents = [
  {
    title: "About",
    body: "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
  },
  {
    title: "Interests",
    body: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
  },
];

function App() {
  return (
    <>
      <img className="avatar-image" src={avatarImage} alt="avatar image" />
      <main>
        <Header />
        <MailButton />
        {introContents.map(({ title, body }) => (
          <Introduce title={title} body={body} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
