import React, { useContext } from 'react';
import FindFrnd from '../../assets/img/home/find-icon.png';
import WatchIcon from '../../assets/img/home/watch.png';
import GroupIcon from '../../assets/img/home/groups-icon.png';
import PageIcon from '../../assets/img/home/page-icon.png';
import GameIcon from '../../assets/img/home/game.png';
import { MainContext } from '../../context/MainContext';
import ShortcutJson from '../../helpers/LeftShortcut.json';

const LeftBar = () => {
  const { userDetails } = useContext(MainContext);

  return (
    <>
      <div className='top'>
        <ul>
          <li className='profile'>
            <img src={userDetails.profile_pic} alt='' />
            <span>{userDetails.name}</span>
          </li>
          <li className=''>
            <img src={FindFrnd} alt='' />
            <span>Friends</span>
          </li>
          <li className=''>
            <img src={WatchIcon} alt='' />
            <span>Watch</span>
          </li>
          <li className=''>
            <img src={GroupIcon} alt='' />
            <span>Groups</span>
          </li>
          <li className=''>
            <img src={PageIcon} alt='' />
            <span>Pages</span>
          </li>
          <li className=''>
            <img src={GameIcon} alt='' />
            <span>Play Games</span>
          </li>
          <li className='see-more'>
            <div className='rounde'>
              <svg
                viewBox='0 0 16 16'
                width='2.0rem'
                height='2.0rem'
                className='sidebar-con--flex--box--img  small-arrrow'
                style={{ userSelect: 'auto' }}
              >
                <g
                  fillRule='evenodd'
                  transform='translate(-448 -544)'
                  style={{ userSelect: 'auto' }}
                >
                  <path
                    fillRule='nonzero'
                    d='M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z'
                    style={{ userSelect: 'auto' }}
                  />
                </g>
              </svg>
            </div>
            <span>See More</span>
          </li>
        </ul>
      </div>
      <div className='line-brk'></div>
      <div className='bottom'>
        <p className='tit'>Your Shortcuts</p>
        <ul>
          {ShortcutJson?.map((data) => (
            <li className='' key={data?.id}>
              <div className='img' style={{ background: data?.bgColor }}></div>
              <span>{data?.name}</span>
            </li>
          ))}
          <li className='see-more'>
            <div className='rounde'>
              <svg
                viewBox='0 0 16 16'
                width='2.0rem'
                height='2.0rem'
                className='sidebar-con--flex--box--img  small-arrrow'
                style={{ userSelect: 'auto' }}
              >
                <g
                  fillRule='evenodd'
                  transform='translate(-448 -544)'
                  style={{ userSelect: 'auto' }}
                >
                  <path
                    fillRule='nonzero'
                    d='M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z'
                    style={{ userSelect: 'auto' }}
                  />
                </g>
              </svg>
            </div>
            <span>See More</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftBar;
