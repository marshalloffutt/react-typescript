import { ChildAsFC } from './Child';
import { Child } from './Child';

// const Parent = () => { <Child color="red" onClick={() => console.log("Clicked")} />};

const Parent = () => {
	return (
	<ChildAsFC color="red" onClick={() => console.log("Clicked")}>
	</ChildAsFC>
	);
}

export default Parent;
