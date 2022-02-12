import { useState, useEffect } from 'react'
import { Card, Image, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { addPost } from '../../actions/postActions'

const Post = () => {
  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  const [tags, setTags] = useState('')
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const userPosts = useSelector((state) => state.userPosts)

  const { errors } = userPosts

  let textError =
    errors &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.find((err) => err.param === 'text')
      ? 'is-invalid'
      : ''

  let tagsError =
    errors &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.find((err) => err.param === 'tags')
      ? 'is-invalid'
      : ''

  const onSubmitHandler = (e) => {
    e.preventDefault()

    dispatch(addPost(text, tags))

    setTags('')
    setText('')

    textError = ''
    tagsError = ''
  }

  return (
    <>
      <Card className='border-top-orange'>
        <Card.Body>
          <Form onSubmit={onSubmitHandler}>
            <Row className='g-0'>
              <Col md={1} className='me-2'>
                <Image
                  className='border-round'
                  fluid
                  width='50'
                  height='50'
                  src={userInfo.avatar}
                />
              </Col>
              <Col md={10}>
                <div className='mb-2'>
                  <textarea
                    className={`form-control ${textError}`}
                    placeholder='Write what you wish'
                    value={text}
                    name='text'
                    onChange={(e) => setText(e.target.value)}></textarea>

                  <div className='invalid-feedback'>
                    {errors &&
                    textError != '' &&
                    Array.isArray(errors) &&
                    errors.length > 0 &&
                    errors.filter((err) => err.param === 'text').length > 0
                      ? errors.filter((err) => err.param === 'text')[0].msg
                      : ''}
                  </div>
                </div>

                <Form.Group className='mb-3'>
                  <Form.Control
                    type='tags'
                    placeholder='Enter tags eg. (HTML, CSS, PHP)'
                    name='tags'
                    className={tagsError}
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />

                  <div className='invalid-feedback'>
                    {errors &&
                    textError != '' &&
                    Array.isArray(errors) &&
                    errors.length > 0 &&
                    errors.filter((err) => err.param === 'tags').length > 0
                      ? errors.filter((err) => err.param === 'tags')[0].msg
                      : ''}
                  </div>

                  <div className='d-flex justify-content-between mt-2'>
                    <i className='fas fa-images'></i>
                    <Button
                      className='button-rounded publish-btn'
                      variant='primary'
                      type='submit'>
                      Publish
                    </Button>
                  </div>
                </Form.Group>
              </Col>
              <Col className='gx-3'></Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Post
