import { MyBlogAppPage } from './app.po';

describe('my-blog-app App', () => {
  let page: MyBlogAppPage;

  beforeEach(() => {
    page = new MyBlogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
