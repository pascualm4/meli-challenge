import styles from './Breadcumb.module.scss'
import Typography from '@mui/material/Typography'

const Breadcumb = ({ categories = [] }) => {
  return (
    <div className={styles.breadcumbContainer}>
      <Typography component={'p'}>
        {categories.length > 0 && categories[0]}
      </Typography>
    </div>
  )
}

export default Breadcumb
