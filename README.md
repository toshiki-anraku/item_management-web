## 環境構築

1. ターミナル起動
2. ホストの設定
   1. `sudo vim /private/etc/hosts`
   2. パスワード入力
   3. ホスト名追記（インサートモード(i)、コマンドモード(esc ボタン)）
   4. http 用 ：`127.0.0.1 tebura.local tebura-storybook.local`
   5. https 用：`::1 tebura.local tebura-storybook.local`
   6. 保存して終了（：wq）
3. item_management-web のディレクトリへ移動
4. Docker 起動

```
docker compose up -d
```

4. コンテナに入る

```
docker exec -it imweb_app bash
```

5. パッケージインストール

```
npm install
```

6. Next.js 起動

```
npm run dev
```

7. ブラウザで起動確認（Next.js）

```
http://tebura.local:8080/
```

8. storybook 起動

```
npm run storybook
```

9. ブラウザで起動確認（storybook）

```
http://tebura-storybook.local:8080/
```
