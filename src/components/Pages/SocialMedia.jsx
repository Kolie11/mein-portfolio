import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import React from 'react'

function SocialMedia() {
  return (
    <>
<div className="btns">
              <a
                href="https://www.linkedin.com/in/fassou-mathias-kolie-2950a7155/"
                target="_blank"
              >
                <CiLinkedin />
              </a>

              <a href="https://x.com/KolieMathias"
                target="_blank">
                <FaXTwitter />
              </a>

              <a href="https://github.com/Kolie11"
              target="_blank">
                <FaGithub />
              </a>
            </div>
    </>
  )
}

export default SocialMedia

