import React from 'react'

export class Contact extends React.PureComponent {
  render() {
    const { language } = this.props

    return (
      <React.Fragment>
        <h3>{language.contact}</h3>
        <hr />
        <ul className="list-inline">
          <li>
            <i className="fas fa-map-marker-alt"></i>
            {language.address}
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>
            {language.phone}
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            {language.email}
          </li>
          <li>
            <i className="fab fa-skype"></i>
            {language.skype}
          </li>
          <li>
            <i className="fas fa-birthday-cake"></i>
            {language.birthday}
          </li>
          <li>
            <i className="fab fa-linkedin-in"></i>
            <a
              href="https://www.linkedin.com/in/nhon-nguyen-3108a1174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language.linkedin}
            </a>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
