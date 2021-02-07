# node-lesson
nodejsでのAPI開発の練習
clean architectureで作成してみた。

## 実行方法

1. パッケージのインストール（初回のみ）

```bash
npm install
```

2. mysql、phpMyadmin イメージのビルド（初回のみ）

```bash
docker-compose build
```

3. mysql、phpMyadmin コンテナ起動

```bash
docker-compose up -d
```

4. アプリの起動
```bash
npm run dev
```

5. 起動確認
下記にリクエストして、JSONが返却されたらOK  
http://localhost:4000/api/users

## 終了方法

1. アプリの終了

ターミナルで 「ctrl + C」

2. コンテナの停止&削除

```bash
docker-compose down --volumes
```
