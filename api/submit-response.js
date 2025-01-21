export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://luisuribe95.github.io'); // Cambia esto si tu dominio de GitHub Pages es diferente
  res.setHeader('Access-Control-Allow-Methods', 'POST'); // Asegura que se permitan solicitudes POST
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Permite el encabezado Content-Type
  if (req.method === 'POST') {
      const { response } = req.body;

      try {
          // Aquí se puede simular guardar la respuesta o hacer algo con ella
          console.log('Respuesta recibida:', response);

          // Responder al cliente
          res.status(200).json({ message: 'Respuesta registrada correctamente.' });
      } catch (error) {
          // Si ocurre un error, devolver un error 500
          res.status(500).json({ message: 'Hubo un error al registrar la respuesta.' });
      }
  } else {
      // Si no es un POST, devolver un error de método no permitido
      res.status(405).json({ message: 'Método no permitido' });
  }
}
