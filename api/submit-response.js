export default async function handler(req, res) {
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
