const express = require('express');
const cors = require('cors');
const totalum = require('totalum-api-sdk');

const app = express();
app.use(cors());

const options = {
  apiKey: {
    'api-key': 'sk-eyJrZXkiOiIzYzI0MzcwMmUzZjA0ZmFiYjlkM2Q3NWIiLCJuYW1lIjoiRGVmYXVsdCBBUEkgS2V5IGF1dG9nZW5lcmF0ZWQganhjciIsIm9yZ2FuaXphdGlvbklkIjoiZW1pbGlvLWxvcGV6LXBydWViYS10ZWNuaWNhIn0_'
  }
};

const totalumSdk = new totalum.TotalumApiSdk(options);


app.get('/pedidos', async (req, res) => {
  try {
    const response = await totalumSdk.crud.getItems('pedidos', {
      sort: { createdAt: 1 },
      pagination: { page: 0, limit: 50 }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.get('/clientes', async (req, res) => {
  try {
    const response = await totalumSdk.crud.getItems('clientes', {
      sort: { createdAt: 1 },
      pagination: { page: 0, limit: 50 }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.get('/productos', async (req, res) => {
  try {
    const response = await totalumSdk.crud.getItems('productos', {
      sort: { createdAt: 1 },
      pagination: { page: 0, limit: 50 }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(3000, () => {
  console.log('corriendo en http://localhost:3000');
});
