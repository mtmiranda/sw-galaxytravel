import styled from 'styled-components'

export const FooterWrapper = styled.div`
    footer {
        .footer-basic {
            padding: 40px 0;
            & ul {
                padding: 0;
                list-style: none;
                text-align: center;
                font-size: 18px;
                line-height: 1.6;
                margin-bottom: 0;
            }

            & li {
                padding: 0 10px;
            }

            & ul a {
                color: inherit;
                text-decoration: none;
                opacity: 0.8;
            }

            & ul a:hover {
                opacity: 1;
            }

            & .social {
                text-align: center;
                padding-bottom: 25px;
            }

            & .social > a {
                font-size: 24px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                display: inline-block;
                text-align: center;
                border-radius: 30%;
                border: 1px solid #ccc;
                margin: 0 8px;
                color: inherit;
                opacity: 0.75;

                & .svg-inline--fa {
                    display: inline-block;
                    font-size: inherit;
                    height: 1em;
                    overflow: visible;
                    vertical-align: middle;
                }
            }

            & .social > a:hover {
                opacity: 0.9;
            }

            .fbwyou {
                .icon-jedi {
                    margin-left: 10px;
                }
            }

            & .copyright,
            .fbwyou {
                margin-top: 15px;
                font-size: 13px;
                color: #aaa;
                margin-bottom: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`
