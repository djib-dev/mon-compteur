export default function HistoryList({ history,future }) {
    return (
        <div>
            <h3>Historique des valeurs :</h3>
            <ul>
                {history.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <h3>Valeurs à rétablir :</h3>
            <ul>
                {future.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};