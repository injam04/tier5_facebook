import { createContext, Component } from 'react';
import ProfilerPic from '../assets/img/nav/p_pic.jpeg';

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
        profile_pic: ProfilerPic,
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
