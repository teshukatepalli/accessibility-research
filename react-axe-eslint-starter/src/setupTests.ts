import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axe from 'axe-core';

configure({ adapter: new Adapter() });

const runAxe = async (container) => {
  const results = await axe.run(container);
  return results;
};

export { runAxe };