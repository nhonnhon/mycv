import React from 'react'
import { connect } from 'react-redux'
import { changeLang } from 'actions/lang'

export class Footer extends React.PureComponent {
  state = {
    lang: 'en',
  }

  changeLang = lang => {
    this.setState(
      {
        lang,
      },
      () => {
        this.props.changeLang(lang)
      },
    )
  }

  render() {
    const { language } = this.props
    const { lang } = this.state

    return (
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-xs-8">
              <div>{language.footerTitle}</div>
            </div>
            <div className="col-xs-4">
              <div className="d-flex justify-sm-content-end">
                <div className={lang === 'vn' ? 'active' : ''} onClick={() => this.changeLang('vn')}>
                  <strong>{language.footerLanguageVN}</strong>
                </div>
                <div className="ml-1 mr-1">
                  <strong> || </strong>
                </div>
                <div className={lang === 'en' ? 'active' : ''} onClick={() => this.changeLang('en')}>
                  <strong>{language.footerLanguageEN}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ lang }) => {
  return {
    language: lang.language,
  }
}

export default connect(
  mapStateToProps,
  { changeLang },
)(Footer)
