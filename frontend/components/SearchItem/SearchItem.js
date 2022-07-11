import Image from 'next/image'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import styles from './SearchItem.module.scss'

const SearchItem = ({ item }) => {
  const { id, picture, title, price } = item

  return (
    <Link href={`/items/${id}`}>
      <div className={styles.searchItemWrapper}>
        <div className={styles.searchItemImage}>
          <Image
            loader={() => picture}
            src={picture}
            alt={'prodct'}
            width={'180px'}
            height={'180px'}
            className={'product-img'}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <Typography component={'p'}>
            {price.currency} {price.amount}
          </Typography>
          <Typography component={'p'}>{title}</Typography>
        </div>
        <div className={styles.locationContainer}>
          <Typography component={'p'}>Capital Federal</Typography>
        </div>
      </div>
    </Link>
  )
}

export default SearchItem
