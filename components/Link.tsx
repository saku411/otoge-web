import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import MuiLink from '@mui/material/Link'

type LinkProps = {
  href: NextLinkProps['href']
  target?: string
  children?: React.ReactNode
  color?: string
  underline?: 'always' | 'hover' | 'none'
}

export const Link: React.FC<LinkProps> = (props) => (
  <NextLink href={props.href} passHref>
    <MuiLink
      target={props.target || '_self'}
      rel='noopener noreferrer'
      color={props.color}
      underline={props.underline}
    >
      {props.children}
    </MuiLink>
  </NextLink>
)

export default Link
