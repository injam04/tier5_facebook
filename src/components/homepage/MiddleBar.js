import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import StoryOne from '../../assets/img/home/story1.webp';
import StoryTwo from '../../assets/img/home/story2.webp';
import StoryThree from '../../assets/img/home/story3.webp';
import LikeIcon from '../../assets/img/home/like.png';
import LikeBlueIcon from '../../assets/img/home/like-blue.png';
import CommentIcon from '../../assets/img/home/comment.png';
import ShareIcon from '../../assets/img/home/share.png';
import { MainContext } from '../../context/MainContext';
import { allPosts } from '../../helpers/Arrays';

function MiddleBar() {
  const { userDetails } = useContext(MainContext);
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5`)
      .then((resp) => {
        // console.log(resp.data);
        setPosts(allPosts);
      })
      .catch((error) => {
        console.log(error.response);
      });
    // console.log(a);
    // console.log(moment(1657025645163).fromNow());
    // end.to(start, true);
  }, []);

  const handleComment = (user, postId) => {
    if (comment.trim() === '') {
      alert('Please enter comment.');
    } else {
      const postComment = {
        text: comment,
        created_at: '22 July 2022',
        user: user,
      };

      const newPosts = posts.map((post, i) => {
        if (post.id === postId) {
          post.comments.push(postComment);
        }
        return post;
      });

      setPosts(newPosts);
      setComment('');
    }
  };

  const handleLike = (post) => {
    // console.log(post);
    const newPosts = posts.map((p, i) => {
      if (p.id === post.id) {
        p.liked = !p.liked;
      }
      return p;
    });

    setPosts(newPosts);
  };

  return (
    <>
      <div className='stories'>
        <div className='single'>
          <img src={userDetails.profile_pic} alt='' className='s-img' />
          <div className='user_pic'></div>
          <div className='svg-section'>
            <svg
              fill='currentColor'
              viewBox='0 0 20 20'
              width='1em'
              height='1em'
              className='a8c37x1j ms05siws l3qrxjdp b7h9ocf4 ljqsnud1 jnigpg78 odw8uiq3'
            >
              <g fillRule='evenodd' transform='translate(-446 -350)'>
                <g fillRule='nonzero'>
                  <path
                    d='M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z'
                    transform='translate(354.5 159.5)'
                  />
                  <path
                    d='M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z'
                    transform='translate(354.5 159.5)'
                  />
                </g>
              </g>
            </svg>
          </div>
          <p className='user_name first'>Create Story</p>
        </div>
        <SingleStory i_id={StoryOne} name='Md Raisul' />
        <SingleStory i_id={StoryTwo} name='Hasan Khalifa' />
        <SingleStory i_id={StoryThree} name='Jack Daniel' />
        {/* <SingleStory i_id={StoryFour} name='Mir Ashraf' /> */}
      </div>
      <div className='create-box post-box'>
        <div className='top'>
          <img src={userDetails.profile_pic} alt='' />
          <form
            onSubmit={(e) => {
              // handleComment(userDetails, post.id);
              e.preventDefault();
            }}
            style={{ width: '100%' }}
          >
            <input
              type='text'
              placeholder="What's on your mind, Injamamul?"
              // value={comment}
              // onChange={(e) => setComment(e.target.value)}
            />
          </form>
        </div>
        <div className='line-brk'></div>
        <div className='l-p-f'>
          <div className='live'>
            <svg
              viewBox='0 0 24 24'
              style={{ fill: '#f3422f' }}
              width='2.4rem'
              height='2.4rem'
              className='main-con--mind-section--grid--chose-section--live--icon'
            >
              <g
                fillRule='evenodd'
                transform='translate(-444 -156)'
                style={{ userSelect: 'auto' }}
              >
                <g style={{ userSelect: 'auto' }}>
                  <path
                    d='M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z'
                    transform='translate(354 158.5)'
                    style={{ userSelect: 'auto' }}
                  />
                  <path
                    d='M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5'
                    transform='translate(354 158.5)'
                    style={{ userSelect: 'auto' }}
                  />
                </g>
              </g>
            </svg>
            <span className='live-text'>Live video</span>
          </div>
          <div className='photo'>
            <svg
              viewBox='0 0 24 24'
              style={{ fill: '#45bd62' }}
              width='2.4rem'
              height='2.4rem'
              className='mind-section--chose-box--upload-media--icon'
            >
              <g
                fillRule='evenodd'
                transform='translate(-444 -156)'
                style={{ userSelect: 'auto' }}
              >
                <g style={{ userSelect: 'auto' }}>
                  <path
                    d='m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z'
                    transform='translate(352 156.5)'
                    style={{ userSelect: 'auto' }}
                  />
                  <path
                    fillRule='nonzero'
                    d='m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z'
                    transform='translate(352 156.5)'
                    style={{ userSelect: 'auto' }}
                  />
                </g>
              </g>
            </svg>
            <span className='photo-text'>Photo/video</span>
          </div>
          <div className='feeling'>
            <svg
              viewBox='0 0 24 24'
              style={{ fill: '#f7b928' }}
              width='2.4rem'
              height='2.4rem'
              className='mind-section--chose-box--feeling-box--icon'
            >
              <g
                fillRule='evenodd'
                transform='translate(-444 -156)'
                style={{ userSelect: 'auto' }}
              >
                <g style={{ userSelect: 'auto' }}>
                  <path
                    d='M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z'
                    transform='translate(353.5 156.5)'
                    style={{ userSelect: 'auto' }}
                  />
                  <path
                    fillRule='nonzero'
                    d='M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z'
                    transform='translate(353.5 156.5)'
                    style={{ userSelect: 'auto' }}
                  />
                  <path
                    d='M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192'
                    transform='translate(353.5 156.5)'
                    style={{ userSelect: 'auto' }}
                  />
                </g>
              </g>
            </svg>
            <span className='feeling-text'>Felling/activity</span>
          </div>
        </div>
      </div>
      <div className='create-room post-box'>
        <div className='room'>
          <i
            data-visualcompletion='css-img'
            className='active-line--btn--icon'
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5zaboDASSye.png")',
              backgroundPosition: '0px -219px',
              backgroundSize: 'auto',
              width: '24px',
              height: '24px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
              userSelect: 'auto',
            }}
          />
          <p className=''>Create Room</p>
        </div>
        <div className='images'>
          <div className='single'>
            <img src={userDetails.profile_pic} alt='' />
          </div>
          <div className='single'>
            <img src={userDetails.profile_pic} alt='' />
            <div className='active-icon'></div>
          </div>
          <div className='single'>
            <img src={userDetails.profile_pic} alt='' />
          </div>
        </div>
      </div>
      <div className='all-posts'>
        {posts &&
          posts.length !== 0 &&
          posts.map((post, i) => (
            <SinglePost
              key={i}
              post={post}
              userDetails={userDetails}
              handleComment={handleComment}
              comment={comment}
              setComment={setComment}
              handleLike={handleLike}
            />
          ))}
      </div>
    </>
  );
}

export default MiddleBar;

const SinglePost = ({
  userDetails,
  post,
  handleComment,
  comment,
  setComment,
  handleLike,
}) => (
  <div className='single-posts'>
    <div className='header'>
      <div className='left'>
        <img src={post.user.profile_pic} alt='' className='post-user-img' />
        <div className='aut-details'>
          <p className='name'>{post.user.name}</p>
          <a href='#?' className='time'>
            {post.posted_on}
          </a>
        </div>
      </div>
      <div className='right'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-dots'
          width={44}
          height={44}
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#e4e6eb'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <circle cx={5} cy={12} r={1} />
          <circle cx={12} cy={12} r={1} />
          <circle cx={19} cy={12} r={1} />
        </svg>
      </div>
    </div>
    <div className='main-img'>
      <img src={post.post_image} alt='' className='img-fluid' />
    </div>
    <div className='bottom'>
      <div className='reactions'>
        <div className='left'>
          <img
            alt='lll'
            className=''
            height={18}
            role='presentation'
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
            width={18}
            style={{ userSelect: 'auto' }}
          />
          <span className=''>
            {post.liked ? 'You and' : ''} {post.likes}{' '}
            {post.liked ? 'others' : ''}
          </span>
        </div>
        <div className='right'>
          <span className=''>{post.comments.length} Comments</span>
          <span className='share'>{post.share} Shares</span>
        </div>
      </div>
      <div className='line-brk'></div>
      <div className='l-c-s'>
        <div className='like' onClick={() => handleLike(post)}>
          {post.liked ? (
            <img src={LikeBlueIcon} alt='' />
          ) : (
            <img src={LikeIcon} alt='' />
          )}
          <span className={post.liked ? 'liked' : ''}>
            {post.liked ? 'Like' : 'like'}
          </span>
        </div>
        <div className='comment'>
          <img src={CommentIcon} alt='' />
          <span className='comment-text'>Comment</span>
        </div>
        <div className='share'>
          <img src={ShareIcon} alt='' />
          <span className='share-text'>Send</span>
        </div>
      </div>
      <div className='line-brk'></div>
      <div className='comment-section'>
        {post.comments.length !== 0 && (
          <div className='all-comments'>
            {post.comments.map((comment, i) => (
              <div className='single' key={i}>
                <img src={comment.user.profile_pic} alt='' />
                <div className='data'>
                  <p className='author'>{comment.user.name}</p>
                  <p className='main-c'>{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className='comment-inp'>
          <img src={userDetails.profile_pic} alt='' />
          <form
            onSubmit={(e) => {
              handleComment(userDetails, post.id);
              e.preventDefault();
            }}
            style={{ width: '100%' }}
          >
            <input
              type='text'
              placeholder='Write a comment'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  </div>
);

const SingleStory = ({ i_id, name }) => (
  <div className='single'>
    <img src={`${i_id}`} alt='' className='s-img' />
    <div className='user_pic'>
      {/* <img src='./img/user/n0tificati0n-img-9.png' alt='' className='' /> */}
    </div>
    <p className='user_name'>{name}</p>
  </div>
);
