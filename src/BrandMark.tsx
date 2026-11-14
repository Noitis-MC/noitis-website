import noitisLogoLight from '../media/Noitis Logo - Light.webp'
import noitisLogoDark from '../media/Noitis Logo - Dark.webp'
import noitisLongLogoLight from '../media/Noitis Long Logo - Light.webp'
import noitisLongLogoDark from '../media/Noitis Long Logo - Dark.webp'

type Theme = 'light' | 'dark'

type BrandMarkProps = {
  compact?: boolean
  theme?: Theme
}

export function BrandMark({ compact = false, theme = 'light' }: BrandMarkProps) {
  const logo = theme === 'dark' ? noitisLogoDark : noitisLogoLight
  const longLogo = theme === 'dark' ? noitisLongLogoDark : noitisLongLogoLight

  if (compact) {
    return (
      <span className="brand brand--header" role="img" aria-label="Noitis">
        <span className="brand__long-logo" aria-hidden="true">
          <img src={longLogo} alt="" width="720" height={theme === 'dark' ? 213 : 199} decoding="async" />
        </span>
      </span>
    )
  }

  return (
    <span className="brand" role="img" aria-label="Noitis">
      <span className="brand__mark brand__mark--official" aria-hidden="true">
        <img className="blend-logo" src={logo} alt="" width="640" height="640" loading="lazy" decoding="async" />
      </span>

      <span className="brand__copy" aria-hidden="true">
        <strong>NOITIS™</strong>
        <small>Intelligence, engineered.</small>
      </span>
    </span>
  )
}
