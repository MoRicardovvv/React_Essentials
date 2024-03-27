import {useState} from 'react';

import {CORE_CONCEPTS} from "./data.js";
import { EXAMPLES } from './data.js';
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selected buttons => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
        <main>
          <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
              {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcept key={conceptItem.title} {...conceptItem}/>))}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton isClicked={selectedTopic === "components"}
                onClick={() => handleClick('components')}>Components</TabButton>
              <TabButton isClicked={selectedTopic === "jsx"}
                onClick={() => handleClick('jsx')}>JSX</TabButton>
              <TabButton isClicked={selectedTopic === "props"}
                onClick={() => handleClick('props')}>Props</TabButton>
              <TabButton isClicked={selectedTopic === "state"}
                onClick={() => handleClick('state')}>State</TabButton>
            </menu>
            {!selectedTopic ? (<p>Please select a topic.</p>
              ) : ( <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
          </section>
        </main>
    </div>
  );
}

export default App;
