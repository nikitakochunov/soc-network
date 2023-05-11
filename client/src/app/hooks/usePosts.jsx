import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from './useAuth'
import { nanoid } from 'nanoid'
import Postservice from '../services/post.service'

const PostsContext = React.createContext()

export const usePosts = () => {
  return useContext(PostsContext)
}

export const PostsProvider = ({ children }) => {
  const { userId: pageId } = useParams()
  const { currentUser } = useAuth()

  const [isLoading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getPostsList()
  }, [pageId])

  const getPostsList = async () => {
    try {
      const { content } = await Postservice.getPosts(pageId)
      setPosts(content)
    } catch (error) {
      catchError()
    } finally {
      setLoading(false)
    }
  }

  const getUserPosts = (userId) => {
    return posts.filter((post) => post.userId === userId)
  }

  const createPost = async (data) => {
    const post = {
      ...data,
      _id: nanoid(),
      userId: currentUser._id,
      created_at: Date.now(),
    }
    try {
      const { content } = await Postservice.createPost(post)
      setPosts((prevState) => [...prevState, content])
    } catch (error) {
      catchError()
    }
  }

  const removePost = async (id) => {
    try {
      const { content } = await Postservice.removePost(id)
      if (content === null) {
        setPosts((prevState) => prevState.filter((com) => com._id !== id))
      }
      return content
    } catch (error) {
      catchError()
    }
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  useEffect(() => {
    if (error !== null) {
      setError(null)
    }
  }, [error])

  return (
    <PostsContext.Provider
      value={{
        posts,
        createPost,
        removePost,
        isLoading,
        getUserPosts,
      }}
    >
      {!isLoading ? children : 'Загрузка...'}
    </PostsContext.Provider>
  )
}
