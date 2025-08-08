// import express, { json, urlencoded, Request } from 'express';
// import productsRoutes from './routes/products/index.js';
// import authRoutes from './routes/auth/index.js';
// import ordersRoutes from './routes/orders/index.js';
// import stripeRoutes from './routes/stripe/index.js';

// import serverless from 'serverless-http';

// const port = 3001;
// const app = express();

// app.use(urlencoded({ extended: false }));
// app.use(
//   json({
//     verify: (req: Request, res, buf) => {
//       req.rawBody = buf;
//     },
//   })
// );

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.use('/products', productsRoutes);
// app.use('/auth', authRoutes);
// app.use('/orders', ordersRoutes);
// app.use('/stripe', stripeRoutes);

// if (process.env.NODE_ENV === 'dev') {
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// }

// export const handler = serverless(app);

import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/products';
import cors from 'cors';
// importa otras rutas si las tienes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Rutas
app.use('/products', productRoutes);
app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});