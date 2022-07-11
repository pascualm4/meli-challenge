import styles from './Layout.module.scss'
const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layoutContainer}>{children}</div>
    </div>
  )
}

export default Layout
