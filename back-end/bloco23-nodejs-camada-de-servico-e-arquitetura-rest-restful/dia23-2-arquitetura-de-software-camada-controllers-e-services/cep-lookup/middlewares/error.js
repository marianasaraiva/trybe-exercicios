// const { status } = require('express/lib/response');

const middlewareError = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } })
  }
  
  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
      invalidData: 400,
    };
    
    const status = statusByErrorCode[err.code] || 500;
    return res.status(status).json(err);
  }
  
  console.error(err);
  return res.status(500).json({ error: { code: 'internal', message: 'Internal server error' }});
}

module.exports = middlewareError;