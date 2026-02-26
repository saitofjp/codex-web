import './App.css';

const features = [
  'Viteによる高速な開発サーバー',
  'React 18の基本構成',
  'すぐ編集できるシンプルな初期画面',
];

function App() {
  return (
    <main className="app">
      <section className="card" aria-labelledby="app-title">
        <p className="badge">セットアップ完了</p>
        <h1 id="app-title">Reactプロジェクトへようこそ</h1>
        <p className="lead">`src/App.jsx` を編集して開発を始めましょう。</p>

        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
