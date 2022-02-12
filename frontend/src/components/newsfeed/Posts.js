import { useEffect } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../actions/postActions'
import Loader from '../Loader'
import Message from '../Message'

import moment from 'moment'

const Post = () => {
  const dispatch = useDispatch()

  const userPosts = useSelector((state) => state.userPosts)

  const { posts, loading, error } = userPosts

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  if (error) {
    return <Message variant={'error'}>{error}</Message>
  }

  return (
    <>
      {loading && posts.length === 0 ? (
        <Loader />
      ) : (
        <Row>
          {posts.map((post) => (
            <div className='col-md-12 grid-margin' key={post._id}>
              <div className='card rounded'>
                <div className='card-header'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                      <img
                        className='img-xs rounded-circle m-0'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDrl3S-9QrvuQseJS-bfz-hx_7xpsrJFe5w&usqp=CAU'
                        alt=''
                      />
                      <div className='ms-2 d-flex flex-column'>
                        <span>{post.user.name}</span>
                        <span className='text-muted'>
                          {moment(post.createdAt).fromNow()}
                        </span>
                      </div>
                    </div>
                    <div className='dropdown'>
                      <button
                        className='btn p-0'
                        type='button'
                        id='dropdownMenuButton2'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='feather feather-more-horizontal icon-lg pb-3px'>
                          <circle cx='12' cy='12' r='1'></circle>
                          <circle cx='19' cy='12' r='1'></circle>
                          <circle cx='5' cy='12' r='1'></circle>
                        </svg>
                      </button>
                      <div
                        className='dropdown-menu'
                        aria-labelledby='dropdownMenuButton2'>
                        <a
                          className='dropdown-item d-flex align-items-center'
                          href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='feather feather-meh icon-sm mr-2'>
                            <circle cx='12' cy='12' r='10'></circle>
                            <line x1='8' y1='15' x2='16' y2='15'></line>
                            <line x1='9' y1='9' x2='9.01' y2='9'></line>
                            <line x1='15' y1='9' x2='15.01' y2='9'></line>
                          </svg>{' '}
                          <span className=''>Unfollow</span>
                        </a>
                        <a
                          className='dropdown-item d-flex align-items-center'
                          href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='feather feather-corner-right-up icon-sm mr-2'>
                            <polyline points='10 9 15 4 20 9'></polyline>
                            <path d='M4 20h7a4 4 0 0 0 4-4V4'></path>
                          </svg>{' '}
                          <span className=''>Go to post</span>
                        </a>
                        <a
                          className='dropdown-item d-flex align-items-center'
                          href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='feather feather-share-2 icon-sm mr-2'>
                            <circle cx='18' cy='5' r='3'></circle>
                            <circle cx='6' cy='12' r='3'></circle>
                            <circle cx='18' cy='19' r='3'></circle>
                            <line
                              x1='8.59'
                              y1='13.51'
                              x2='15.42'
                              y2='17.49'></line>
                            <line
                              x1='15.41'
                              y1='6.51'
                              x2='8.59'
                              y2='10.49'></line>
                          </svg>{' '}
                          <span className=''>Share</span>
                        </a>
                        <a
                          className='dropdown-item d-flex align-items-center'
                          href='#'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='feather feather-copy icon-sm mr-2'>
                            <rect
                              x='9'
                              y='9'
                              width='13'
                              height='13'
                              rx='2'
                              ry='2'></rect>
                            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                          </svg>{' '}
                          <span className=''>Copy link</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-body'>
                  <p className='mb-3 tx-14'>
                    {/* CAPTION */}
                    {post.text}
                  </p>
                  {/* PICTURE POST */}
                  <img
                    className='img-fluid'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDrl3S-9QrvuQseJS-bfz-hx_7xpsrJFe5w&usqp=CAU'
                    alt=''
                  />

                  <div className='tags'>
                    {post.tags.split(',').map((tag, index) => (
                      <p className='tags-item' key={index}>
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
      )}
    </>
  )
}

export default Post
