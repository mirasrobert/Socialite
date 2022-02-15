import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import moment from 'moment'

const Profile = () => {
  const auth = useSelector((state) => state.auth)

  const { isLoading, user, errors, isError } = auth

  const navigate = useNavigate()

  useEffect(() => {
    if ((!user || !user.token) && !isLoading) {
      // Check if logged in
      navigate('/')
    }
  }, [user])

  return (
    <>
      {isLoading && !user ? (
        <Loader />
      ) : (
        <div className='profile-wrapper'>
          <div className='profile-section-user'>
            <div className='profile-cover-img'>
              <img
                src='https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg'
                alt=''
              />
            </div>
            <div className='profile-info-brief p-3'>
              <img
                className='img-fluid user-profile-avatar'
                src={user && user.avatar}
                alt=''
              />
              <div className='text-center'>
                <h5 className='text-uppercase mb-4'>{user && user.name}</h5>
                <p className='text-muted fz-base'>
                  {user && user.bio && user.bio}
                </p>
              </div>
            </div>

            <hr className='m-0' />
            <div className='hidden-sm-down'>
              <hr className='m-0' />
              <div className='profile-info-contact p-4'>
                <h6 className='mb-3'>Contact Information</h6>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <strong>URL:</strong>
                      </td>
                      <td>
                        <p className='text-muted mb-0'>
                          {user &&
                            user.contact &&
                            user.contact.url &&
                            user.contact.url}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>EMAIL:</strong>
                      </td>
                      <td>
                        <p className='text-muted mb-0'>
                          {user && user.email && user.email}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>PHONE:</strong>
                      </td>
                      <td>
                        <p className='text-muted mb-0'>
                          {user &&
                            user.contact &&
                            user.contact.phone &&
                            user.contact.phone}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className='m-0' />
              <div className='profile-info-general p-4'>
                <h6 className='mb-3'>General Information</h6>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <strong>JOB:</strong>
                      </td>
                      <td>
                        <p className='text-muted mb-0'>
                          {user && user.job && user.job}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>POSITION:</strong>
                      </td>
                      <td>
                        <p className='text-muted mb-0'>
                          {user && user.position && user.position}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>STUDIED:</strong>
                      </td>
                      <td>
                        <p className='text-muted mb-0'>
                          {user && user.studied && user.studied}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>MEMBER SINCE:</strong>
                      </td>
                      <td>
                        <p className='text-muted mb-0'>
                          {user && moment(user.createdAt).format('LL')}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className='m-0' />
            </div>
          </div>

          <div className='profile-section-main'>
            <ul className='nav nav-tabs profile-tabs' role='tablist'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  data-toggle='tab'
                  href='#profile-overview'
                  role='tab'>
                  Timeline
                </a>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  data-toggle='tab'
                  to='/profile/edit'
                  role='tab'>
                  <i className='fas fa-edit'></i>
                  Edit Profile
                </Link>
              </li>
            </ul>

            <div className='tab-content profile-tabs-content'>
              <div
                className='tab-pane active'
                id='profile-overview'
                role='tabpanel'>
                <div className='post-editor'>
                  <textarea
                    name='post-field'
                    id='post-field'
                    className='post-field'
                    placeholder='Write Something Cool!'></textarea>
                  <div className='d-flex'>
                    <button className='btn btn-success px-4 py-1'>Post</button>
                  </div>
                </div>

                <div className='stream-posts'>
                  <div className='stream-post'>
                    <div className='grid-margin'>
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
                                <span>John Doe</span>
                                <span className='text-muted'>3 mins ago</span>
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
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
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
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='feather feather-meh icon-sm mr-2'>
                                    <circle cx='12' cy='12' r='10'></circle>
                                    <line x1='8' y1='15' x2='16' y2='15'></line>
                                    <line x1='9' y1='9' x2='9.01' y2='9'></line>
                                    <line
                                      x1='15'
                                      y1='9'
                                      x2='15.01'
                                      y2='9'></line>
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
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
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
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
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
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit tempora corporis corrupti deserunt,
                            consectetur hic?
                          </p>
                          {/* PICTURE POST */}
                          <img
                            className='img-fluid'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDrl3S-9QrvuQseJS-bfz-hx_7xpsrJFe5w&usqp=CAU'
                            alt=''
                          />

                          <div className='tags'>
                            <p className='tags-item'>HTML</p>
                            <p className='tags-item'>CSS</p>
                            <p className='tags-item'>PHP</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
