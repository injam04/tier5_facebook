import JotiPic from '../assets/img/home/pro_pic/joti.jpg';
import NizamPic from '../assets/img/home/pro_pic/nizam.jpg';
import SiamPic from '../assets/img/home/pro_pic/siam.jpg';

export const allPosts = [
  {
    id: 'tghsfojH34324',
    user: {
      username: 'sarjokar',
      name: 'Joti Sarkar',
      profile_pic: JotiPic,
    },
    posted_on: '14 min',
    likes: 25,
    liked: false,
    comments: [
      {
        text: 'Nice post!',
        created_at: '22 July 2022',
        user: {
          username: 'hmsiam',
          name: 'Hossain Mahmud Siam',
          profile_pic: SiamPic,
        },
      },
      {
        text: 'How are you?',
        created_at: '22 July 2022',
        user: {
          username: 'sknizamu',
          name: 'Sk Nizam',
          profile_pic: NizamPic,
        },
      },
    ],
    post_image: '#810b14',
    share: 5,
  },
  {
    id: 'dsffsd34324',
    user: {
      username: 'sknizamu',
      name: 'Sk Nizam',
      profile_pic: NizamPic,
    },
    posted_on: 'Yesterday at 12:56am',
    likes: 10,
    liked: true,
    comments: [
      {
        text: 'hello',
        created_at: '22 July 2022',
        user: {
          username: 'hmsiam',
          name: 'Hossain Mahmud Siam',
          profile_pic: SiamPic,
        },
      },
    ],
    post_image: '#e375fc',
    share: 2,
  },
];
