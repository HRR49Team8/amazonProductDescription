import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from '../client/src/Table';

Enzyme.configure({ adapter: new Adapter() });

const product = {
  "name": "Kind Bars, Salted Caramel",
  "price": 5,
  "prime": true,
  "returnable": false,
  "flavor": "peach",
  "ingredients": "Peanuts, almonds, chicory root fiber, cashews, pecans",
  "brand": "Kind",
  "sensitivity": "Gluten Free, Nut",
  "ingredient_info": "Protein 3 grams",
  "about": `Contains 12 - 1.4oz Bars Made with simple, whole ingredients With 5g of sugar, it's a satisfying, nutty snack that only seems indulgent. Gluten Free, no genetically modified ingredients, 0g Trans fat, Kosher Low glycemic index, low sodium, good source of fiber`,
  "Ratings_avg": 5
 }

describe('Table Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Table product={product} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show flavor of product', () => {
    const wrapper = shallow(<Table product={product} />);
    expect(wrapper.html().includes('peach'));
  });
})