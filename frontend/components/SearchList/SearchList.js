import styles from './SearchList.module.scss'
import SearchItem from '../SearchItem'

const SearchList = ({ items }) => {
  return (
    <div className={styles.searchListWrapper}>
      {items &&
        items.map((item) => <SearchItem className={'item-row'} item={item} />)}
    </div>
  )
}

export default SearchList
