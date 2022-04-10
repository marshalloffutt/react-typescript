import { useState, useRef, useEffect } from 'react';

const users = [
	{ name: 'Sarah', age: 20 },
	{ name: 'Alex', age: 20 },
	{ name: 'Michael', age: 20 }
];

const UserSearch: React.FC = () => {
	//add ref to HTML element that *may* be null, and pass null as its default value
	const inputRef = useRef<HTMLInputElement | null>(null); //explicit
	// const inputRef = useRef<any>(); //implicit, useful if I don't know the exact type, don't check. escape hatch.
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string, age: number} | undefined>();

	useEffect(() => {
		//type guard
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});

		setUser(foundUser);
	};

	return (
		<div>
			User Search
			<input
				ref={inputRef}
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<button onClick={onClick}>Find User</button>
			<div>
				{user && user.name}
				{user && user.age}
			</div>
		</div>
	);
};

export default UserSearch;
