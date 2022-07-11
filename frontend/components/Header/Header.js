import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logoML from '../../assets/img/logo-ml.png'
import Search from '../Search'

const Header = ({ query = '' }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link href={'/'}>
          <Image src={logoML} alt={'logo ML'} className={'logo-img'} />
        </Link>
      </div>
      <div className={styles.searchBarContainer}>
        <Search query={query} />
      </div>
    </header>
  )
}

export default Header
