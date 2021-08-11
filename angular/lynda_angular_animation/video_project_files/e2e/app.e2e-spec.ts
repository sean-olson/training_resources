import { AnimatedAngularVideoPage } from './app.po';

describe('animated-angular-video App', () => {
  let page: AnimatedAngularVideoPage;

  beforeEach(() => {
    page = new AnimatedAngularVideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
