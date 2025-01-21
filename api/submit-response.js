export default async function handler(req, res) {
  // Asegúrate de permitir solicitudes desde tu dominio de GitHub Pages
  res.setHeader('Access-Control-Allow-Origin', 'https://luisuribe95.github.io');  // Cambia esto si tu dominio es diferente
  res.setHeader('Access-Control-Allow-Methods', 'POST');  // Permite solo solicitudes POST
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Permite el encabezado Content-Type
  res.setHeader('Access-Control-Allow-Credentials', 'true');  // Permite las credenciales, si es necesario
  
  // Si la solicitud es un "preflight" (OPTIONS), responde con un código 200 para permitir la solicitud
  if (req.method === 'OPTIONS') {
      return res.status(200).end();
  }

  // Verifica si el método es POST
  if (req.method === 'POST') {
      const { response } = req.body;  // Obtener la respuesta enviada desde el frontend
      
      try {
          // Ejemplo: Simulamos guardar la respuesta
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
