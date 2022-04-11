import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  type Transaction = {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createDat: string;
  };

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createDat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
