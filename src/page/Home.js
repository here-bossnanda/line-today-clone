import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLineTodayData } from '../store/actions/newsAction';

export default function Home() {
  const { news, isLoading } = useSelector(state => state.news);
  const [getAllNews, setAllNews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLineTodayData());
  }, [])

  if (isLoading) return <h1>Loading....</h1>
  return (
    <div>
      <h1>Halooo</h1>
    </div>
  )
}
