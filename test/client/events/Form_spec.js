/* global describe, it, beforeEach */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import EventsForm from '../../../src/components/events/Form';

describe('EventsForm tests', () => {

  let wrapper;

  beforeEach(done => {
    const props = {
      data: {
        name: 'test',
        date: '1999-01-01',
        status: 'Buying',
        image: 'test',
        errors: {}
      }
    };

    wrapper = shallow(<EventsForm {...props} />);
    done();
  });

  it('should render a form', done => {
    expect(wrapper.find('form').length).to.eq(1);
    done();
  });

  it('should render the correct inputs', done => {
    expect(wrapper.find('[name="name"]').length).to.eq(1);
    expect(wrapper.find('[name="date"]').length).to.eq(1);
    expect(wrapper.find('[name="status"]').length).to.eq(1);
    expect(wrapper.find('[name="image"]').length).to.eq(1);
    expect(wrapper.find('button').length).to.eq(1);
    done();
  });

  it('should populate the form', done => {
    expect(wrapper.find({ value: 'test', name: 'name' }).length).to.eq(1);
    expect(wrapper.find({ value: 'test', name: 'image' }).length).to.eq(1);
    expect(wrapper.find({ value: '1999-01-01', name: 'date' }).length).to.eq(1);
    expect(wrapper.find({ value: 'Buying', name: 'status' }).length).to.eq(1);
    done();
  });


});
