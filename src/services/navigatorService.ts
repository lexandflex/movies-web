import { BrowserHistory, createBrowserHistory } from 'history';

export class Navigator {
  static history = createBrowserHistory({ window });

  static push: BrowserHistory['push'] = (...args) => {
    Navigator.history.push(...args);
  };
}
