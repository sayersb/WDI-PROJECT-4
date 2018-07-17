/* global describe, it, beforeEach, before, after, */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';


import EventsIndex from '../../../src/components/events/Index';

const data = [{
  _id: 1,
  name: 'Croatia vs England @ BST Hyde Park ',
  date: '2018-07-11',
  image: 'https://www.bst-hydepark.com/assets/img/BST-Football-Event-900x560-a6957ce2a4.jpg',
  location: { lat: 51.507923, lng: -0.165730 }
}, {
  _id: 2,
  name: 'Bestival 2018',
  date: '2018-08-02',
  image: 'https://ents24.imgix.net/image/000/307/642/6ffbe95df6aa40cbc64f99def0fbe279fe23649c.jpg?w=358&h=268&auto=format',
  location: { lat: 50.639285, lng: -2.208757 }
}, {
  _id: 3,
  name: 'Lovebox',
  date: '2018-07-13',
  image: 'https://media.timeout.com/images/102150183/1372/772/image.jpg',
  location: { lat: 51.498204, lng: -0.292464 }
}];

describe('EventsIndex tests', () => {
  let wrapper;
  let promise;

  before(done => {
    promise = Promise.resolve({ data });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <EventsIndex />
      </MemoryRouter>
    );
    done();
  });

  it('should render events', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(3);
      done();
    })
      .catch(done);
  });

  it('should render the correct data', done => {
    promise.then(() => {
      wrapper.update();
      _.orderBy(data, 'name', 'asc').forEach((event, index) => {
        expect(wrapper.find('img').at(index).prop('src')).to.eq(event.image);
        expect(wrapper.find('h2').at(index).text()).to.eq(event.name);
        expect(wrapper.find('Link').at(index).prop('to')).to.eq(`/events/${event._id}`);
      });
      done();
    });
  });

  it('should re-order the events when the sort dropdown is changed', done => {
    const e = { target: { value: 'name|desc' }};
    promise.then(() => {
      wrapper.find('select').simulate('change', e);
      wrapper.update();

      _.orderBy(data, 'name', 'desc').forEach((event, index) => {
        expect(wrapper.find('img').at(index).prop('src')).to.eq(event.image);
        expect(wrapper.find('h2').at(index).text()).to.eq(event.name);
        expect(wrapper.find('Link').at(index).prop('to')).to.eq(`/events/${event._id}`);
      });

      done();
    });
  });

  // it('should filter the events', done => {
  //   const input = wrapper.find('input');
  //   promise.then(() => {
  //     input.simulate('change', { target: { value: 'Croatia' } });
  //     wrapper.update();
  //     expect(wrapper.find('div.card').length).to.eq(1);
  //
  //     // input.simulate('change', { target: { value: 'rubbish' } });
  //     // wrapper.update();
  //     // expect(wrapper.find('div.card').length).to.eq(0);
  //
  //     done();
  //
  //   });
  // });


});
