import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card, Image, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../features/posts/postSlice'
import { toast } from 'react-toastify'

const Post = () => {
  const { token } = useSelector((state) => state.auth.user.token)

  const [fileInputState, setFileInputState] = useState('')
  const [previewSource, setPreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
    setSelectedFile(file)
    setFileInputState(e.target.value)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const [formData, setFormData] = useState({
    tags: '',
    text: '',
  })

  const { tags, text } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const dispatch = useDispatch()

  const { posts, isError, isSuccess, isLoading, errors } = useSelector(
    (state) => state.posts
  )

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

  // Submit Form
  const onSubmitHandler = (e) => {
    e.preventDefault()

    let postData = {
      text,
    }

    if (selectedFile) {
      const reader = new FileReader()
      reader.readAsDataURL(selectedFile)
      reader.onloadend = async () => {
        const base64EncodedImage = reader.result

        const imageResponse = await axios.post(
          '/api/upload',
          { data: base64EncodedImage },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )

        dispatch(
          createPost({
            text,
            image: imageResponse.data.secure_url,
          })
        )
        toast.success('Post added')
      }
      reader.onerror = () => {
        toast.error('Error Uploading Image')
      }
    } else {
      console.log(postData)

      dispatch(createPost(postData))
      toast.success('Post added')
    }

    setPreviewSource('')
    setFileInputState('')
    setSelectedFile('')

    setFormData({
      text: '',
      tags: '',
    })
  }

  return (
    <>
      <div className='status-wrapper'>
        <Form onSubmit={onSubmitHandler}>
          <div className='post-form-wrapper'>
            <div className='profile-pic-form'>
              <img
                src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
                alt=''
              />
            </div>

            <textarea
              className={`post-form ${textError}`}
              placeholder="What's on your mind"
              value={text}
              name='text'
              onChange={onChange}></textarea>
          </div>

          <div className='ms-5 text-danger'>
            {errors &&
            textError != '' &&
            Array.isArray(errors) &&
            errors.length > 0 &&
            errors.filter((err) => err.param === 'text').length > 0
              ? errors.filter((err) => err.param === 'text')[0].msg
              : ''}
          </div>

          <div className='add-button'>
            <label htmlFor='image' className='photo-video-btn'>
              <i className='fas fa-images'></i>
              <p>Photo or Video</p>

              <input
                className='d-none'
                type='file'
                name='image'
                id='image'
                onChange={handleFileInputChange}
                value={fileInputState}
                accept='image/png, image/jpeg, image/jpg'
              />
            </label>

            <button className='btn btn-success' type='submit'>
              Share
            </button>
          </div>
        </Form>

        {previewSource && (
          <img src={previewSource} className='img-preview' alt=''></img>
        )}
      </div>
    </>
  )
}

export default Post
