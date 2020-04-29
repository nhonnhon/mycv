import React from 'react'
import { connect } from 'react-redux'
import { AboutMe } from './AboutMe'
import { Contact } from './Contact'
import { Skills } from './Skills';

export class PersonalInfo extends React.PureComponent {
  render() {
    const { language, skills } = this.props

    return (
      <div className="personal-info">
        <img src={require('../assets/images/avatar.jpg')} alt="avatar" />
        <h1 className="text-center">{language.fullName}</h1>
        <AboutMe language={language} />
        <Contact language={language} />
        <Skills language={language} skills={skills} />
      </div>
    )
  }
}

const mapStateToProps = ({ lang }) => {
  return {
    language: lang.language,
    skills: lang.skills
  }
}

export default connect(mapStateToProps)(PersonalInfo)
