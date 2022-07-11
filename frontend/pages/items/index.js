import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Breadcumb from '../../components/Breadcumb'
import SearchList from '../../components/SearchList'
import { getItemsByQuery } from '../../actions'

const ItemsPage = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState({})
  const router = useRouter()

  const getData = useCallback(
    async (query) => {
      const response = await getItemsByQuery(query)
      setResults(response)
    },
    [query],
  )

  useEffect(() => {
    if (router.isReady) {
      setQuery(router.query.query)
      getData(router.query.query)
    }
  }, [router.isReady, getData, router.query])

  return (
    <>
      <Header query={query} />
      <Layout>
        <Breadcumb categories={results.categories} />
        <SearchList items={results?.items?.slice(0, 4)} />
      </Layout>
    </>
  )
}

export default ItemsPage
