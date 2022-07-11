import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import styles from './SearchItemDetail.module.scss'

const SearchItemDetail = ({ item }) => {
  return (
    <div className={styles.itemDetailWrapper}>
      <div className={styles.itemDetailRow}>
        <div className={styles.itemImgContainer}>
          {item.picture && (
            <Image
              loader={() => item.picture}
              src={item.picture}
              alt={'product'}
              width={'680px'}
              height={'680px'}
              className={'product-img'}
            />
          )}
        </div>
        <div className={styles.shortItemDescriptionContainer}>
          <Typography component={'p'}>
            {item.condition} - {item.sold_quantity}
          </Typography>
          <Typography component={'h3'}>{item.title}</Typography>
          <Typography component={'h1'}>
            {item?.price?.currency} {item?.price?.amount}
          </Typography>
          <Button variant="contained">Comprar</Button>
        </div>
      </div>
      <div className={styles.longItemDescriptionContainer}>
        <Typography component={'h2'}>Descripcion del producto</Typography>
        <Typography component={'p'}>{item.description}</Typography>
      </div>
    </div>
  )
}

export default SearchItemDetail
