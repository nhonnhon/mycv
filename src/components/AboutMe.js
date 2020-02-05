import React from 'react'

export class AboutMe extends React.PureComponent {
  render() {
    const { language } = this.props

    return (
      <React.Fragment>
        <h3>{language.aboutMe}</h3>
        <hr />
        <p>{language.summary}</p>
        <h4 className="mb-0">{language.career}</h4>
        <ul>
          <li>{language.careers1}</li>
          <li>{language.careers2}</li>
          <li>{language.careers3}</li>
        </ul>
        <h4 className="mb-0">{language.hobbies}</h4>
        <ul>
          <li>{language.hobbies1}</li>
          <li>{language.hobbies2}</li>
        </ul>
      </React.Fragment>
    )
  }
}


