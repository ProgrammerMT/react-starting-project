import React from 'react';
import reactImage from './assets/lake.jpg';
import StudentInfo from './StudentInfo'; 

function App() {
  return (
    <div>
      <header>
        {/* <img src="src/assets/react-core-concepts.png" alt="Lake" /> */}
        <img src={reactImage} alt="Lake" /> 
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>

      <StudentInfo firstName="Mariyan" lastName="Tomov" title="Student" />
      <StudentInfo firstName="Mariyan" lastName="Tomov" title="Student" />
      <StudentInfo firstName="Mariyan" lastName="Tomov" title="Student" image={reactImage} />
    </div>
  );
}

export default App;