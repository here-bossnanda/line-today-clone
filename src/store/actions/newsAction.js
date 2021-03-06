import axios from "axios"

const baseUrl = 'https://today.line.me/id/portaljson'

export const startFetchNews = () => {
  return {
    type: 'START_FETCH_NEWS'
  }
}

export const dispatchData = (news) => {
  return {
    type: 'FETCH_ALL_NEWS',
    payload: news
  }
}

export const fetchLineTodayData = () => {
  return async (dispatch) => {
    try {
      dispatch(startFetchNews())
      const { data } = await axios.get(baseUrl);
      console.log(data);
      // dispatch(dispatchData(data))
    } catch (error) {
      console.log(error);
    }
  }
}