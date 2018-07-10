import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach (() => {
    // create an Jquery wrappered instance of the component
    component = renderComponent(App);
  });
  // Use 'it' to test a single attribute of a target
  it("Shows a comment box", () => {

    //Use 'expect' to make an assertion about a target
    expect(component.find('.comment-box')).to.exist;
  });

// test existance of the comment list component
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  })
});
