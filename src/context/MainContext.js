import { createContext, Component } from 'react';

export const MainContext = createContext();

class MainContextProvider extends Component {
  state = {
    userDetails: {},
  };

  componentDidMount() {
    this.setState({
      userDetails: {
        username: 'injam',
        name: 'Injamamul Haque',
        profile_pic: 'https://avatars.githubusercontent.com/u/55509736?v=4',
      },
    });
  }

  render() {
    return (
      <MainContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContextProvider;
