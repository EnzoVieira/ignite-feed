import styles from "./Avatar.module.css"

interface IProps {
  src: string
  hasBorder?: boolean
}

export function Avatar({ src, hasBorder = true }: IProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
