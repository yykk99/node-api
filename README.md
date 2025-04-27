# SNS風投稿アプリのAPI

## 機能一覧

### 認証・ユーザー管理

- POST /api/auth/register 新規ユーザー登録
- POST /api/auth/login ログイン
- GET /api/users/me 自分のプロフィール取得
- PUT /api/users/me プロフィール更新
- DELETE /api/users/me アカウント削除

### 投稿関連

- POST /api/posts 新規投稿作成
- GET /api/posts 投稿一覧を取得
- GET /api/posts/:id 特定の投稿を取得
- PUT /api/posts/:id 投稿を編集
- DELETE /api/posts/:id 投稿を削除

### いいね・フォロー

- POST /api/posts/:id/like 投稿にいいね
- DELETE /api/posts/:id/like いいねを外す
- POST /api/users/:id/follow ユーザーをフォローする
- DELETE /api/users/:id/follow フォロー解除

## 技術スタック

- Node.js + Express
- MongoDB + Mongoose
- JWT認証
- bcrypt（パスワードのハッシュ化）
- dotenv（環境変数管理）
- CORS、helmetなどセキュリティ系ミドルウェア

## 実装の流れ

1. プロジェクトのセットアップ
2. MongoDBとMongoose接続
3. 認証機能の実装（register, login）
4. JWTによる認証ミドルウェア
5. ユーザー情報管理のエンドポイント
6. 投稿のCRUD
7. いいね・フォローなどソーシャル機能追加
8. バリデーション・エラーハンドリング
9. テスト（JestやPostmanなど）
