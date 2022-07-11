import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import styles from './Search.module.scss'

const Search = ({ query = '' }) => {
  const router = useRouter()
  return (
    <Formik
      initialValues={{ query: query }}
      onSubmit={(values) => {
        router.push(`/items?query=${values.query}`)
      }}
    >
      {({ handleChange, values }) => (
        <Form>
          <TextField
            hiddenLabel
            id="query"
            placeholder="Nunca dejes de buscar"
            type="search"
            name="query"
            value={values.query}
            className={styles.textField}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Form>
      )}
    </Formik>
  )
}

export default Search
