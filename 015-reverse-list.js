// Iterative T: O(n), S: O(1)
const reverseList = (head) => {
	let current = head;
	let prev = null; 
	
	while (current !== null) {
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next; 
	}

	return prev;
}