import React from 'react'
import { connect } from 'react-redux'

export class Project extends React.PureComponent {
  render() {
    const { language, projects } = this.props
    return (
      <React.Fragment>
      <h3>{language.projectDone}</h3>
      <hr/>
      <div className="row">
        {projects.map(project => {
          const {name, time, description, role, size, technology} = project

          return (
            <div className="col-sm-6">
              <table>
                <tbody>
                  <tr>
                    <td>{language.projectName}</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>{language.time}</td>
                    <td>{time}</td>
                  </tr>
                  <tr>
                    <td>{language.description}</td>
                    <td>{description}</td>
                  </tr>
                  <tr>
                    <td>{language.role}</td>
                    <td>{role}</td>
                  </tr>
                  {/* <tr>
                    <td>{language.size}</td>
                    <td>{size}</td>
                  </tr> */}
                  <tr>
                    <td>{language.technology}</td>
                    <td>{technology}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
      <h4>{language.andMore}</h4>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ lang }) => {
  return {
    projects: lang.projects,
    language: lang.language,
  }
}

export default connect(mapStateToProps)(Project)