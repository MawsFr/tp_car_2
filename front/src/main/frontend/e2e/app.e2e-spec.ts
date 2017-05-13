import { Tp2FrontPage } from './app.po';

describe('tp2-front App', () => {
  let page: Tp2FrontPage;

  beforeEach(() => {
    page = new Tp2FrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
