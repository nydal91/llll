import { LlllPage } from './app.po';

describe('llll App', function() {
  let page: LlllPage;

  beforeEach(() => {
    page = new LlllPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
