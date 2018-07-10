import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// use 'describe' to group together similar tests
describe('CommentBox', () => {

  let component; // starts out undefined -- builds a new instance for each test

  beforeEach( () => {
    // create an Jquery wrappered instance of the component
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  // Use 'it' to test a single attribute of a target
  it("has a text area", () => {

    //Use 'expect' to make an assertion about a target
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;

  });

  describe('entering some text', () => {

    beforeEach (() => {
      component.find('textarea').simulate('change', 'New comment');
    });

    it('Shows that text in the text area', () => {
      expect(component.find('textarea')).to.have.value('New comment');
    });

    it('when submited,clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });

});
