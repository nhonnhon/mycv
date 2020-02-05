import { LANG_EN, LANG_VN } from 'constants/lang'

const changeLang = type => {
  return dispatch => {
    dispatch({
      type: type === 'vn' ? LANG_VN : LANG_EN,
    })
  }
}

export { changeLang }
