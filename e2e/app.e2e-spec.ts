import { LibraryManagementFrontendPage } from './app.po';

describe('library-management-frontend App', function() {
  let page: LibraryManagementFrontendPage;

  beforeEach(() => {
    page = new LibraryManagementFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
