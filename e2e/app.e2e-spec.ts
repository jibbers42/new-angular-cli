import { NewAngularCliPage } from './app.po';

describe('new-angular-cli App', () => {
  let page: NewAngularCliPage;

  beforeEach(() => {
    page = new NewAngularCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
