import { BonsaiPage } from './app.po';

describe('bonsai App', () => {
  let page: BonsaiPage;

  beforeEach(() => {
    page = new BonsaiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
