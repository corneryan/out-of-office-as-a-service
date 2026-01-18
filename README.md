# Out-of-Office-as-a-Service

Sometimes you don’t need a calendar invite.
You just need to be out of office.

`Out-of-Office-as-a-Service` is a tiny open-source API that generates automatic replies — ranging from perfectly corporate to gently human to unapologetic boundary-setting.

You may receive more honesty than expected.

## ✨ What it does

- One endpoint

- No auth

- No tracking

- No users

### Just an OOO message

Sometimes it gives you the reply you’d write yourself.

Sometimes it gives you the one you wish you could send.

## 🔌 API

`GET /ooo`

Example response

```json
{
  "message": "I’m currently out of the office and will respond when I return."
}
```

Sometimes:

```json
{
  "message": "I’m offline today. This can wait."
}
```

Very occasionally:

```json
{
  "message": "I’m not available. Please adjust expectations accordingly."
}
```

That’s intentional.

## 🎚️ Weighted replies

`Not all OOO messages are equal.`

Some are safe.

Some are honest.

Some are harder to send — so they appear less often.

`“Rare messages exist because boundaries are rare.”`

Tone is influenced by:

```
honesty level

reason (vacation, burnout, focus, life, etc.)

a small amount of chaos
```

## 🌐 Live demo

Open the homepage.

[Out of Office](https://out-of-office-as-as-ervice.vercel.app/)

Click Generate OOO.

You’ll get an automatic reply — whether you asked for one or not.

## 🧠 Why this exists

Because:

- Not every absence needs justification

- Being unavailable is not a failure

- Boundaries shouldn’t require perfect wording

- Sometimes the correct response is simply: I’m not here

## 🧩 Part of a small family

This project is a sibling to:

[`Permission-as-a-Service`](https://github.com/corneryan/permission-as-a-service.git)
An API that gives you permission to stop, rest, say no, or let go.

Different outputs.

Same philosophy.

Tools for moments when deciding feels heavier than it should.

## 🤝 Contributing

Add the OOO message you wish you could send.

Edit the dataset

Add a short, human sentence

Choose a weight honestly

Open a PR

No tests required.
No explanation required.

## 🛠️ Local development

```
npm install
vercel dev
```

Then open:

http://localhost:3000

## 📄 License

MIT
