import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubAlt,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

import { FooterWrapper } from './style'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <FooterWrapper>
            <footer>
                <div className="footer-basic">
                    <div className="social">
                        <a
                            href="https://www.linkedin.com/in/matheusmdsm/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                            href="https://github.com/mtmiranda"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                        <a
                            href="https://www.instagram.com/matheusmdsm/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <p className="fbwyou">
                        May the force be with you
                        <FontAwesomeIcon
                            className="icon-jedi"
                            icon={faJedi}
                            size="2x"
                        />
                    </p>
                    <p className="copyright">mtmiranda © 2021</p>
                </div>
            </footer>
        </FooterWrapper>
    )
}

export default Footer
