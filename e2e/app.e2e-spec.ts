import { NewAngularCliPage } from './app.po';

describe('new-angular-cli App', () => {
  let page: NewAngularCliPage;

  beforeEach(() => {
    page = new NewAngularCliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
