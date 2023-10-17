import React from 'react';
import './App.css';
import Swift from './assets/swift.svg';
import Info from './info.json';
import { Menu , Item } from './contents/navitems';
import Body from './contents/body';
function App() {
  let items: Item[] = [
    {text:"About",icon:"",href:"#about"},
    { text: "Experience", icon: "", href:"#experience"},
    {text:"Contact",icon:"",href:"#"},
  ]
  return (
    <div className="app">
      <header>
        <nav>
          <section className="small-title-nav">
            <h2><img src={Swift} alt="" />{Info.name} {Info.surname}</h2>
            <h5>{Info.role}</h5>
          </section>
          <div className="splitter"></div>
          <Menu items={items}></Menu>
        </nav>
      </header>
      <Body></Body>
    </div>
  );
}

export default App;
