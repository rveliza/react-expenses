import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Car insurance',
      amount: 294.67,
      date: new Date(2023, 4, 26)
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 7, 14)
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e4',
      title: 'New Desk(Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
