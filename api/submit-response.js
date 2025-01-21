// api/submit-response.js

export default async function handler(req, res) {
    // Verifica si el método es POST
    if (req.method === 'POST') {
      const { response } = req.body; // Obtener la respuesta enviada desde el frontend
  
      // Aquí es donde registrarías la respuesta en la base de datos
      // Por ejemplo, guardar en una base de datos, en un archivo o hacer alguna otra acción
      try {
        // Ejemplo: Simulamos una base de datos con un array
        const savedResponses = []; // Aquí se almacenaría la respuesta en la base de datos real
        savedResponses.push(response);
  
        // Responder al frontend
        res.status(200).json({ message: 'Respuesta registrada correctamente.' });
      } catch (error) {
        // Si hay un error, enviar una respuesta con código 500
        res.status(500).json({ message: 'Hubo un error al registrar la respuesta.' });
      }
    } else {
      // Si no es un POST, devolver un error de método no permitido
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  