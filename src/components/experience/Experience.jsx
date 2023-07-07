import React from 'react'
import './experience.css'
import { FaJira } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { FaConfluence } from 'react-icons/fa'
import { SiPowerbi } from 'react-icons/si'
import { SiGoogleanalytics } from 'react-icons/si'
import { CgFigma } from 'react-icons/cg'
import { SiAdobexd } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobepremierepro } from 'react-icons/si'
import { SiProtodotio } from 'react-icons/si'
import { IoLogoHtml5 } from 'react-icons/io'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GiTalk } from 'react-icons/gi'
import { FaUserTie } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { MdDataThresholding } from 'react-icons/md'
import { GiBrain } from 'react-icons/gi'
import { GiCycle } from 'react-icons/gi'

{/* Experience Component */}

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>

        {/* product management skills */}

        <div className="technical_skills">
          <h3>Product Management</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <FaJira className='experience_details-icon' />
              <div>
                <h4>Jira</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <VscAzure className='experience_details-icon' />
              <div>
                <h4>Azure Devops Boards</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <FaConfluence className='experience_details-icon' />
              <div>
                <h4>Confluence</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiPowerbi className='experience_details-icon' />
              <div>
                <h4>Power BI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiGoogleanalytics className='experience_details-icon' />
              <div>
                <h4>Google Analytics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* product design skills*/}

        <div className="technical_skills">
          <h3>Product Design</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <CgFigma className='experience_details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiAdobexd className='experience_details-icon' />
              <div>
                <h4>Adobe XD</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiProtodotio className='experience_details-icon' />
              <div>
                <h4>Proto.io</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiAdobephotoshop className='experience_details-icon' />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiAdobeillustrator className='experience_details-icon' />
              <div>
                <h4>Adobe Illustrator</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiAdobepremierepro className='experience_details-icon' />
              <div>
                <h4>Adobe Premiere</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        {/* techincal skills*/}

        <div className="technical_skills">
          <h3>Technical skills</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <IoLogoHtml5 className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <IoLogoCss3 className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <IoLogoJavascript className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <FaReact className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Fundamentals</small>
              </div>
            </article>

            <article className='experience_details'>
              <FaDatabase className='experience_details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <SiMongodb className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Fundamentals</small>
              </div>
            </article>

          </div>
        </div>

        {/* soft skills */}

        <div className="technical_skills">
          <h3>Soft skills</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <GiTalk className='experience_details-icon' />
              <div>
                <h4>Communication</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <FaUserTie className='experience_details-icon' />
              <div>
                <h4>Leadership</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <HiUserGroup className='experience_details-icon' />
              <div>
                <h4>Collaboration</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <MdDataThresholding className='experience_details-icon' />
              <div>
                <h4>Analytical thinking</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <GiCycle className='experience_details-icon' />
              <div>
                <h4>Adaptability</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

            <article className='experience_details'>
              <GiBrain className='experience_details-icon' />
              <div>
                <h4>Problem-solving</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
