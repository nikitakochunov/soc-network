import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from './useAuth'
import { nanoid } from 'nanoid'
import Postservice from '../services/post.service'
import postService from '../services/post.service'

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
      likes: [],
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

  const addPostLike = async ({ postId, userId }) => {
    try {
      const currentPost = posts.find((post) => post._id === postId)

      const currentLikes = currentPost.likes ? [...currentPost.likes] : []

      const newLikes = !currentLikes.includes(userId)
        ? [...currentLikes, userId]
        : currentLikes

      const { content } = await postService.update({
        payload: {
          ...currentPost,
          likes: newLikes || [],
        },
        postId,
      })

      updatePosts(content)
    } catch (error) {
      catchError(error)
    }
  }

  const deletePostLike = async ({ postId, userId }) => {
    try {
      const currentPost = posts.find((post) => post._id === postId)

      const currentLikes = currentPost.likes ? [...currentPost.likes] : []
      const newLikes = currentLikes.filter((lId) => lId !== userId)

      const { content } = await postService.update({
        payload: {
          ...currentPost,
          likes: newLikes || [],
        },
        postId,
      })

      updatePosts(content)
    } catch (error) {
      catchError(error)
    }
  }

  const updatePosts = (data) => {
    const newPosts = [...posts]
    const index = newPosts.findIndex((p) => p._id === data._id)

    newPosts[index] = data

    setPosts(newPosts)
  }

  const catchError = (error) => {
    console.error(error)
    setError(error)
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
        addPostLike,
        deletePostLike,
      }}
    >
      {!isLoading ? children : 'Загрузка...'}
    </PostsContext.Provider>
  )
}
