
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button(props: ButtonProps) {
  return <button className="p-[22px] bg-black text-white rounded" {...props}>{props.children}</button>
} 
