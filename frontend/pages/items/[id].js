import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Breadcumb from '../../components/Breadcumb'
import SearchItemDetail from '../../components/SearchItemDetail'
import { getItemById } from '../../actions'

const ItemPage = () => {
  const [item, setItem] = useState({})
  const router = useRouter()
  const { id } = router.query

  const getItem = useCallback(
    async (id) => {
      const { item } = await getItemById(id)
      setItem(item)
    },
    [id],
  )

  useEffect(() => {
    getItem(id)
  }, [getItem])

  return (
    <>
      <Header />
      <Layout>
        <Breadcumb categories={[item.title]} />
        <SearchItemDetail item={item} />
      </Layout>
    </>
  )
}

export default ItemPage
