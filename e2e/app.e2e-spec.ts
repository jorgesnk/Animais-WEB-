import { AnimaisWebPage } from './app.po';

describe('animais-web App', () => {
  let page: AnimaisWebPage;

  beforeEach(() => {
    page = new AnimaisWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
