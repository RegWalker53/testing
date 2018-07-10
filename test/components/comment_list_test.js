import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

// use 'describe' to group together similar tests
describe('CommentList', () => {

  let component; // starts out undefined -- builds a new instance for each test

  beforeEach( () => {
    // create an Jquery wrappered instance of the component
    const props = { comments: ['New comments', 'Other comments'] };
    component = renderComponent(CommentList, null, props);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-list');
  });


  it("shows an LI for ech comment", () => {
    expect(component.find('li').length).to.equal(2);
  });

  it("Show each component that is provided", () => {
    expect(component).to.contain("New comments");
    expect(component).to.contain('Other comments');
  });

});
