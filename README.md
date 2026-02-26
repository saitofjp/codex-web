# codex-web

Vite + React の最小構成プロジェクトです。

## 必要環境

- Node.js 18+
- npm 9+

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

## 本番ビルド

```bash
npm run build
npm run preview
```

## 実行結果の保管ルール

- 実行・検証の結果は `reports/latest-result.md` に記録します。
- コード変更を行った場合は、可能な範囲で画面スクリーンショットを取得し、`reports/screenshots/` に保存します。
- ブラウザツールで取得した場合は artifact URI も `reports/latest-result.md` に必ず記録します（環境によりリポジトリへ直接コピーできないため）。
- `make_pr` は PR タイトル/本文の下書きを記録する処理です。実際のPR作成はGUIでボタンを押して確定するまで完了しません。

## 補足

Codex Cloud の環境設定次第では、npm registry へのアクセスが `403 Forbidden` となる場合があり、依存インストールや起動確認ができないことがあります。
