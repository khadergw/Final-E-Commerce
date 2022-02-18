import express from 'express';
import data from './data.js';

const app = express();

/*to get the details of a product */
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => {
    return Number(x._id) === Number(req.params.id);

  });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is Listening!');
});
/*to get the lost of the products */
app.get('/api/products', (req, res) =>{
  // console.log("api/products");
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});