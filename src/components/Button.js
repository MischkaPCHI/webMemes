
const Button = ({url, children}) => {
    return (
      <form action={url}>
        <button className="flex-item" >{children}</button>
      </form>
    )
}

export default Button;