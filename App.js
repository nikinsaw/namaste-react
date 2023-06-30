import React from 'react';
import ReactDOM from 'react-dom/client';

// React element
const elem = <span>React element</span>;

// React Functional Component
// Javascript component that returns a react element
//Component Composition
const HeadingComponent = () => (
  <>
    <div id="container">
      <h1 className='head' tabIndex="5">React Functional component</h1>
    </div>
    <div id="container">
      <h1 className='head' tabIndex="5">React  component</h1>
    </div>
  </>
);
const title = <div>
  {elem}
  <HeadingComponent />
  <h1 className='head' tabIndex="5">Hello!</h1>;
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(title);
