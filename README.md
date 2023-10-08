## Todo App

Todo アプリケーションのフロントエンドとバックエンドのリポジトリです。

### 使用技術

#### バックエンド

- **言語**: Go
- **フレームワーク**: Chi
- **コード自動生成**: oapi-codegen
  - OpenAPI 3.0 の仕様から Go のコードを自動生成
- **ホットリロード**: air
  - 開発時にソースコードの変更を検知してアプリケーションを再起動
- **コンテナ**: Docker
  - アプリケーションの実行環境として使用

#### フロントエンド

- **フレームワーク**: React
- **ツール**: Vite
  - 高速な開発サーバーとバンドラー
- **コード自動生成**: openapi-typescript
  - OpenAPI 3.0 の仕様から TypeScript のコードを自動生成
- **コンテナ**: Docker
  - アプリケーションの実行環境として使用
