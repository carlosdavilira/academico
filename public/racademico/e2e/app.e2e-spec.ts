import { RacademicoPage } from './app.po';

describe('racademico App', () => {
  let page: RacademicoPage;

  beforeEach(() => {
    page = new RacademicoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
