# logpty

Pretty print log output in devTools javascript console

## logpty.c([color, msg])

console.log with font color

```javascript
logpty.c(['#866cec', 'Lavanda!'])

logpty.c(['red', 'Cor vermelho!'], ['blue', ' Cor azul!'], ['', ' Sem cor!'])
```

## logpty.b([bgcolor, msg])

console.log with background color

```javascript
logpty.b(['red', 'Fundo vermelho!'], ['blue', ' Fundo azul!'], ['', ' Fundo sem cor.'])
```

## logpty.cb([color, bgcolor, msg])

console.log with font color and background color

```javascript
logpty.cb(['white', 'red', 'Fundo vermelho!'],
  ['white', '#866cec', ' Fundo lavanda!'],
  ['#a9ec6c', 'purple', ' Fundo roxo.'])

logpty.cb(['white', 'red', ' SUPREME '], ['', '', '\n\n\nfeito por viniceosm'])
```