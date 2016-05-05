export default function formatMoney(n) {
	return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}