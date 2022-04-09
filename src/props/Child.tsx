//Interface to define what props Child expects to receive
interface ChildProps {
	color: string;
	onClick: () => void;
}

//Typescript not aware of React component
//Cannot directly receive children unless you directly add annotation to interface
export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			{color}
			<button onClick={onClick}>Click me</button>
		</div>
	);
};

//Define a React function component
//Can define components that will receive children
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
	return (
		<div>
			{color}
			{children}
			<button onClick={onClick}>Click me</button>
		</div>
	);
}
