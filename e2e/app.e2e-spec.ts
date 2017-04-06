import { DomusAngularPage } from './app.po';

describe('domus-angular App', () => {
  let page: DomusAngularPage;

  beforeEach(() => {
    page = new DomusAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
