import React from 'react'

export class Skills extends React.PureComponent {
  render() {
    const { language, skills } = this.props
    return (
      <React.Fragment>
        <h3>{language.skills}</h3>
        <hr />
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <h4 className="mb-0">{language[skill.title]}</h4>
            <div className="process-bar">
              <div className="process-achieve" style={{width: `${skill.percent}%`}}></div>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }
}