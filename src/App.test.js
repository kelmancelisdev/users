import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// smock test
// const sum = (data1, data2) => {
//   return data1 + data2;
// };

// it("sums numbers", () => {
//   expect(sum(1, 2)).toEqual(3);
//   expect(sum(2, 2)).toEqual(4);
// });
