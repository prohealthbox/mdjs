/* eslint-disable no-unused-vars */

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import NotFound from './NotFound.jsx';

describe('<NotFound />', () => {

  it('The text passed to the NotFound component is renderred in a paragraph below the image', () => {
    const props = {
      message: 'Nothing matched the search criteria'
    };
    const expected = props.message;
    const wrapper = shallow(<NotFound {...props} />);
    const actual = wrapper.find('p')
      .children()
      .get(0);

    expect(actual).equals(expected);

  });

});
