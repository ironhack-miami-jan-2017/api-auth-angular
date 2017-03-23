import { ApiAuthAngularPage } from './app.po';

describe('api-auth-angular App', () => {
  let page: ApiAuthAngularPage;

  beforeEach(() => {
    page = new ApiAuthAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
