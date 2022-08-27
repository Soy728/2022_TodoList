export default class LocalStorage {
	static async getAll() {
		return JSON.parse(localStorage.getItem('todo-list') || '[]');
	} //

	static async save(items: string) {
		localStorage.setItem('todo-list', JSON.stringify(items));
	}
}
