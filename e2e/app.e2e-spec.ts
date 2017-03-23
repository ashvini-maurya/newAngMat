import { NewAngMatPage } from './app.po';

describe('new-ang-mat App', () => {
  let page: NewAngMatPage;

  beforeEach(() => {
    page = new NewAngMatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
