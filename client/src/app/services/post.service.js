import httpService from './http.service'

const postEndpoint = 'post/'

const postService = {
  getPosts: async (pageId) => {
    const { data } = await httpService.get(postEndpoint)
    return data
  },
  createPost: async (postData) => {
    const { data } = await httpService.put(
      postEndpoint + postData._id,
      postData
    )
    return data
  },
  removePost: async (id) => {
    const { data } = await httpService.delete(postEndpoint + id)
    return data
  },
}

export default postService
