export default function handler(req, res) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0] : req.socket.remoteAddress;

  console.log("IP do visitante:", ip);

  res.status(200).json({ ip });
}
