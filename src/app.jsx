import React from 'react';

const Content = React.lazy(() => import('./content.jsx'));
const Para = React.lazy(() => import('./para.jsx'));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hiddenContent: false,
      hiddenPara: false,
    }
  }

  render () {
    return (
      <div>
        <h1>Hello world</h1>
        <button type="button" onClick={() => {
          this.setState({
            hiddenContent: !this.state.hiddenContent
          })
        }}>toggle content</button>
        <button type="button" onClick={() => {
          this.setState({
            hiddenPara: !this.state.hiddenPara
          })
        }}>toggle para</button>
        {this.state.hiddenContent ? 
          <React.Suspense fallback={''}>
            <Content/>
          </React.Suspense>
          : ''
        }
        {this.state.hiddenPara ? 
          <React.Suspense fallback={''}>
            <Para/>
          </React.Suspense>
          : ''
        }
      </div>
    );
  }
}

export default App;