// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Food from './Food.jsx'
// import Card from "./Card_Components/Card.jsx"
// import Button from "./Add_CSS_Style/Button.jsx"
import Student from './props/Student.jsx'
function App() {  
  return (
    <>
      {/* <Header/>
      <Food/>
      <Footer/> */}
      {/* <Card/>
      <Card/>
      <Card/> */}
      {/* <Button /> */}
      <Student name="Mai" age={12} isStudent={true}/>
      <Student name="Tung" age={30} isStudent={false}/>
      <Student />
    </>    
  );
}

export default App




// const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )