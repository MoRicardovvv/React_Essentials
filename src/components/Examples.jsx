import { useState } from 'react';
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selected buttons => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = !selectedTopic ? (<p>Please select a topic.</p>
    ) : ( <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton isClicked={selectedTopic === "components"}
              onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isClicked={selectedTopic === "jsx"}
              onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isClicked={selectedTopic === "props"}
              onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isClicked={selectedTopic === "state"}
              onClick={() => handleClick('state')}>State</TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
}